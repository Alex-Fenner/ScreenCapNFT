import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'juqawzi7',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk67HBuxue9SlCeGTVmzOEKGmW3eULMJy2BHh1V8RbKFUE2vwUB7PqJabvPOgTyaJgOGOR5k85Ji4Q7qevLEapdXJUQ9NUMTpCjNTa9EfTmgnnXokdnJaDv1NfpOoNXBSb35ChHuVG36kyn4KU5kWZFSkUyziRWev3fVkx4mDtX0eqci64Mb',
  useCdn: false,
})