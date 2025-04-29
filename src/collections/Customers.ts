import { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
  fields: [
    {
      name: 'profilePicture',
      type: 'upload',
      label: 'Profile Picture',
      relationTo: 'media',
      required: false,
    },
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'firstName',
          label: 'First Name',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'text',
          name: 'lastName',
          label: 'Last Name',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'email',
          name: 'email',
          label: 'Email',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'text',
          name: 'phone',
          label: 'Phone Number',
          required: false,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'number',
          name: 'age',
          label: 'Age',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'date',
          name: 'dateOfBirth',
          label: 'Date of Birth',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'select',
          name: 'contactPreference',
          options: ['Email', 'Phone', 'SMS'],
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'select',
          name: 'gender',
          options: ['Male', 'Female', 'Other'],
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'select',
          name: 'hobby',
          options: ['Reading', 'Sports', 'Gaming', 'Traveling'],
          required: true,
          hasMany: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'checkbox',
          name: 'newsletterSubscription',
          label: 'Newsletter Subscription',
          required: false,
          admin: {
            width: '50%',
            style: {
              display: 'flex',
              justifyContent: 'flex-end',
            },
          },
        },
      ],
    },
    {
      type: 'textarea',
      name: 'bio',
      label: 'Bio',
      required: false,
      admin: {
        width: '100%',
      },
    },
  ],
}
