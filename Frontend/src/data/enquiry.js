const serviceMessages = {
  photography: 'I’d like to ask about photography throughout my safari.',
  guiding: 'I’d like to plan a guided safari.',
}

export function serviceEnquiryMessage(search) {
  const service = new URLSearchParams(search).get('service')
  return Object.hasOwn(serviceMessages, service) ? serviceMessages[service] : ''
}
