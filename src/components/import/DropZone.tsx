import { UploadFile as UploadFileIcon } from '@mui/icons-material'
import { Box, Button, CardActions, Container, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosProgressEvent, AxiosRequestConfig } from 'axios'
import { FC, useState } from 'react'
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone'
import ApiClient from '../../services/ApiClient'
import { FileObj, UploadStatus } from '../../types/FileUpload'
import './Import.css'
import UploadFileListItem from './UploadFileListItem'

const DropZone: FC = () => {
  const [fileObjs, setFilesObj] = useState<FileObj[]>([])

  const onDrop = (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ): void => {
    setFilesObj([
      ...fileObjs,
      { file: acceptedFiles[0], progress: 0, status: UploadStatus.Pending }
    ])
  }

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: { 'text/csv': ['.csv'] },
    onDrop,
    maxFiles: 5,
    multiple: true
  })

  const uploadFile = async (fileObj: FileObj) => {
    return await ApiClient.uploadFile(createFileUploadAxiosConfig(fileObj))
  }

  const createFileUploadAxiosConfig = (
    fileObj: FileObj
  ): AxiosRequestConfig<FormData> => {
    const formData = new FormData()
    formData.append('file', fileObj.file)
    return {
      headers: {
        'content-type': 'multipart/form-data'
      },
      data: formData,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        const progress = (progressEvent.loaded / progressEvent.total!) * 100
        updateFileUploadProgress(fileObj, progress)
      }
    }
  }

  const updateFileUploadProgress = (
    fileUploadObj: FileObj,
    progress: number
  ) => {
    const fileUploadObjNewState = fileObjs.map(fileObj => {
      if (fileObj.file.name === fileUploadObj.file.name) {
        fileObj.progress = progress
        fileObj.status = getFileUploadStatus(fileObj)
      }
      return fileObj
    })
    setFilesObj(fileUploadObjNewState)
  }

  const setUploadStatus = (fileUploadObj: FileObj, status: UploadStatus) => {
    const fileUploadObjNewState = fileObjs.map(fileObj => {
      if (fileObj.file.name === fileUploadObj.file.name) {
        fileObj.status = status
        if (status === UploadStatus.Failed) {
          fileObj.progress = 0
        }
      }
      return fileObj
    })
    setFilesObj(fileUploadObjNewState)
  }

  const getFileUploadStatus = (fileObj: FileObj) => {
    if (fileObj.progress === 0) {
      return UploadStatus.Pending
    } else if (fileObj.progress > 0 && fileObj.progress < 100) {
      return UploadStatus.Loading
    } else if (fileObj.progress === 100) {
      return UploadStatus.Complete
    } else {
      return UploadStatus.Failed
    }
  }

  const uploadFileMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data, fileObj) => {
      setUploadStatus(fileObj, UploadStatus.Complete)
    },
    onError: (error: AxiosError, data) => {
      console.log(`Error uploading files: ${error.message}`)
      setUploadStatus(data, UploadStatus.Failed)
    }
  })

  const handleCancel = (): void => {
    setFilesObj([])
  }

  const handleUpload = () => {
    fileObjs.forEach(async fileObj => {
      if (
        fileObj.status === UploadStatus.Complete ||
        fileObj.status === UploadStatus.Failed
      ) {
        return
      }
      uploadFileMutation.mutate(fileObj)
    })
  }

  const handleRemoveFile = (fileObjForDeletion: FileObj): void => {
    setFilesObj(
      fileObjs?.filter(x => x.file.name !== fileObjForDeletion.file.name)
    )
  }

  const uploadList = fileObjs.map(fileObj => (
    <UploadFileListItem
      fileObj={fileObj}
      handleRemoveFile={handleRemoveFile}
      key={fileObj.file.name}
    />
  ))

  return (
    <Container>
      <Box
        className="dropzone"
        {...getRootProps({ isFocused, isDragAccept, isDragReject })}
      >
        <div className="dropzone-div">
          <input {...getInputProps()} />
          <Box className="import__upload-icon">
            <UploadFileIcon />
          </Box>
          <Typography fontSize="16px">
            <a>Click to upload</a> or drag and drop
          </Typography>
          <Typography color="#00000099" fontSize="14px">
            CSV (max. 3MB)
          </Typography>
        </div>
      </Box>
      {uploadList}
      <CardActions
        sx={{ display: 'block', textAlign: 'center', marginTop: '5%' }}
      >
        <Button variant="contained" size="small" onClick={handleUpload}>
          Upload
        </Button>
        <Button variant="outlined" size="small" onClick={handleCancel}>
          Cancel
        </Button>
      </CardActions>
    </Container>
  )
}

export default DropZone
