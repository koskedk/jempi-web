import { Fields } from '../types/Fields'

const FIELDS_CONFIG: Fields = [
  {
    fieldName: 'uid',
    fieldType: 'String',
    fieldLabel: 'UID',
    groups: ['identifiers', 'sub_heading'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'nationalId',
    fieldType: 'String',
    fieldLabel: 'National ID',
    groups: ['identifiers'],
    scope: ['/patient/:uid', '/search'],
    accessLevel: []
  },
  {
    fieldName: 'auxId',
    fieldType: 'String',
    fieldLabel: 'AUX ID',
    groups: ['identifiers'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'givenName',
    fieldType: 'String',
    fieldLabel: 'First Name',
    groups: ['name', 'demographics'],
    scope: ['/patient/:uid', '/search', '/patient/:uid/audit-trail'],
    accessLevel: []
  },
  {
    fieldName: 'familyName',
    fieldType: 'String',
    fieldLabel: 'Last Name',
    groups: ['name', 'demographics'],
    scope: ['/patient/:uid', '/search', '/patient/:uid/audit-trail'],
    accessLevel: []
  },
  {
    fieldName: 'gender',
    fieldType: 'String',
    fieldLabel: 'Gender',
    groups: ['demographics', 'sub_heading'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'dob',
    fieldType: 'Date',
    fieldLabel: 'Date of Birth',
    groups: ['demographics', 'sub_heading'],
    scope: ['/patient/:uid', '/search'],
    accessLevel: []
  },
  {
    fieldName: 'phoneNumber',
    fieldType: 'String',
    fieldLabel: 'Phone No',
    groups: ['demographics'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'city',
    fieldType: 'String',
    fieldLabel: 'City',
    groups: ['demographics'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'type',
    fieldType: 'String',
    fieldLabel: 'Record Type',
    groups: ['demographics'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'score',
    fieldType: 'Number',
    fieldLabel: 'Match',
    groups: ['none'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  //TODO Add back when we have user information
  // {
  //   fieldName: 'updatedBy',
  //   fieldType: 'String',
  //   fieldLabel: 'Updated By',
  //   group: 'system',
  //   scope: [
  //     '/patient/:uid',
  //   ],
  //   accessLevel: []
  // }
  {
    fieldName: 'siteCode',
    fieldType: 'String',
    fieldLabel: 'Site Code',
    groups: ['registering_facility'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'facilityName',
    fieldType: 'String',
    fieldLabel: 'Facility Name',
    groups: ['registering_facility'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'village',
    fieldType: 'String',
    fieldLabel: 'Village',
    groups: ['address'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'ward',
    fieldType: 'String',
    fieldLabel: 'Ward',
    groups: ['address'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'province',
    fieldType: 'String',
    fieldLabel: 'Province',
    groups: ['address'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'district',
    fieldType: 'String',
    fieldLabel: 'District',
    groups: ['address'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'country',
    fieldType: 'String',
    fieldLabel: 'Country',
    groups: ['address'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'guardianName',
    fieldType: 'String',
    fieldLabel: 'Guardian Name',
    groups: ['relationships'],
    scope: ['/patient/:uid'],
    accessLevel: []
  },
  {
    fieldName: 'process',
    fieldType: 'String',
    fieldLabel: 'Process',
    groups: ['audit_trail'],
    scope: ['/patient/:uid', '/patient/:uid/audit-trail'],
    accessLevel: []
  },
  {
    fieldName: 'actionTaken',
    fieldType: 'String',
    fieldLabel: 'Action taken',
    groups: ['audit_trail'],
    scope: ['/patient/:uid', '/patient/:uid/audit-trail'],
    accessLevel: []
  },
  {
    fieldName: 'links',
    fieldType: 'String',
    fieldLabel: 'Links',
    groups: ['audit_trail'],
    scope: ['/patient/:uid', '/patient/:uid/audit-trail'],
    accessLevel: []
  },
  {
    fieldName: 'when',
    fieldType: 'Date',
    fieldLabel: 'When',
    groups: ['audit_trail'],
    scope: ['/patient/:uid', '/patient/:uid/audit-trail'],
    accessLevel: []
  },
  {
    fieldName: 'changedBy',
    fieldType: 'String',
    fieldLabel: 'Changed by',
    groups: ['audit_trail'],
    scope: ['/patient/:uid', '/patient/:uid/audit-trail'],
    accessLevel: []
  },
  {
    fieldName: 'comment',
    fieldType: 'String',
    fieldLabel: 'Comment',
    groups: ['audit_trail'],
    scope: ['/patient/:uid', '/patient/:uid/audit-trail'],
    accessLevel: []
  }
]

export default FIELDS_CONFIG