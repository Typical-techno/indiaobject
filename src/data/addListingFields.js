const ownerDetails = [
  {
    ownerLabelId: "ownerName",
    ownerTitle: "Owner's Name",
    ownerType: "text",
    required: true,
    ownerHelperText: "Please enter the owner's full name.",
    value: "formData.ownerName",
  },
  {
    ownerLabelId: "ownerPhoneNumber",
    ownerTitle: "Phone Number",
    ownerType: "tel",
    required: true,
    ownerHelperText: "Please enter the owner's primary contact number.",
  },
  {
    ownerLabelId: "ownerWhatsappNumber",
    ownerTitle: "Whatsapp Number",
    ownerType: "tel",
    required: false,
    ownerHelperText: "Please enter the owner's Whatsapp number, if any.",
  },
  {
    ownerLabelId: "otherPhoneNumber",
    ownerTitle: "Other Phone Number",
    ownerType: "tel",
    required: false,
    ownerHelperText: "Please enter another contact number, if any.",
  },
  {
    ownerLabelId: "ownerEmailAddress",
    ownerTitle: "Email Address",
    ownerType: "email",
    required: true,
    ownerHelperText: "Please enter the owner's email address.",
  },
];

const shopDetails = [
  {
    shopLabelId: "shopName",
    shopTitle: "Shop Name",
    shopType: "text",
    required: true,
    shopHelperText: "Please enter the shop's name.",
  },
  {
    shopLabelId: "shopDescription",
    shopTitle: "Description",
    shopType: "text",
    required: true,
    shopHelperText: "Please provide a brief description of the shop.",
  },
  {
    shopLabelId: "businessType",
    shopTitle: "Business Type",
    shopType: "text",
    required: true,
    shopHelperText: "Please specify the type of business.",
  },
  {
    shopLabelId: "priceRange",
    shopTitle: "Price Range",
    shopType: "text",
    required: false,
    shopHelperText: "Please provide the price range of products or services.",
  },
  {
    shopLabelId: "shopWebsite",
    shopTitle: "Website",
    shopType: "url",
    required: false,
    shopHelperText: "Please enter the shop's website URL, if any.",
  },
];

const shopLocationDetails = [
  {
    shopLocationLabelId: "shopLocation",
    shopLocationTitle: "Location",
    shopLocationType: "text",
    required: true,
    shopLocationHelperText: "Please provide the shop's location.",
  },
  {
    shopLocationLabelId: "shopArea",
    shopLocationTitle: "Area",
    shopLocationType: "text",
    required: true,
    shopLocationHelperText: "Please enter the area where the shop is located.",
  },
  {
    shopLocationLabelId: "shopLandmark",
    shopLocationTitle: "Landmark",
    shopLocationType: "text",
    required: false,
    shopLocationHelperText: "Please provide a landmark near the shop.",
  },
  {
    shopLocationLabelId: "shopBuildingNumber",
    shopLocationTitle: "Building Number",
    shopLocationType: "text",
    required: false,
    shopLocationHelperText: "Please provide the building number, if any.",
  },
  {
    shopLocationLabelId: "shopFloorNumber",
    shopLocationTitle: "Floor Number",
    shopLocationType: "text",
    required: false,
    shopLocationHelperText: "Please provide the floor number, if any.",
  },
];

const shopSocialDetails = [
  {
    shopLabelId: "shopFacebook",
    shopTitle: "Facebook",
    shopType: "url",
    required: false,
    shopHelperText: "Please enter the shop's Facebook URL, if any.",
  },
  {
    shopLabelId: "shopInstagram",
    shopTitle: "Instagram",
    shopType: "url",
    required: false,
    shopHelperText: "Please enter the shop's Instagram URL, if any.",
  },
  {
    shopLabelId: "shopTwitter",
    shopTitle: "Twitter",
    shopType: "url",
    required: false,
    shopHelperText: "Please enter the shop's Twitter URL, if any.",
  },
  {
    shopLabelId: "shopYoutube",
    shopTitle: "YouTube",
    shopType: "url",
    required: false,
    shopHelperText: "Please enter the shop's YouTube URL, if any.",
  },
  {
    shopLabelId: "shopLinkedin",
    shopTitle: "LinkedIn",
    shopType: "url",
    required: false,
    shopHelperText: "Please enter the shop's LinkedIn URL, if any.",
  },
];

const shopTimingDetails = [
  {
    shopTimingTitle: "Monday",
    shopTimingLabelId: "monday",
    shopTimingType: "text",
    shopTimingHelperText: "eg: 10:00AM - 06:00PM",
    required: true,
  },
  {
    shopTimingTitle: "Tuesday",
    shopTimingLabelId: "tuesday",
    shopTimingType: "text",
    shopTimingHelperText: "eg: 10:00AM - 06:00PM",
    required: true,
  },
  {
    shopTimingTitle: "Wednesday",
    shopTimingLabelId: "wednesday",
    shopTimingType: "text",
    shopTimingHelperText: "eg: 10:00AM - 06:00PM",
    required: true,
  },
  {
    shopTimingTitle: "Thursday",
    shopTimingLabelId: "thursday",
    shopTimingType: "text",
    shopTimingHelperText: "eg: 10:00AM - 06:00PM",
    required: true,
  },
  {
    shopTimingTitle: "Friday",
    shopTimingLabelId: "friday",
    shopTimingType: "text",
    shopTimingHelperText: "eg: 10:00AM - 06:00PM",
    required: true,
  },
  {
    shopTimingTitle: "Saturday",
    shopTimingLabelId: "saturday",
    shopTimingType: "text",
    shopTimingHelperText: "eg: 10:00AM - 06:00PM",
    required: true,
  },
  {
    shopTimingTitle: "Sunday",
    shopTimingLabelId: "sunday",
    shopTimingType: "text",
    shopTimingHelperText: "eg: Closed",
    required: true,
  },
];

const categoriesSelection = [
  { id: 1, required: true },
  { id: 2, required: true },
  { id: 3, required: true },
  { id: 4, required: false },
  { id: 5, required: false },
];

const paymentAcceptedFields = [
  { id: "Cash", label: "Cash", type: "checkbox" },
  { id: "GooglePay", label: "Google Pay", type: "checkbox" },
  { id: "Paytm", label: "Paytm", type: "checkbox" },
  { id: "PhonePay", label: "Phone Pay", type: "checkbox" },
  { id: "Cards", label: "Cards", type: "checkbox" },
  { id: "Cheque", label: "Cheque", type: "checkbox" },
  { id: "BankTransfer", label: "Bank Transfer", type: "checkbox" },
  { id: "UPI", label: "UPI", type: "checkbox" },
];

export {
  ownerDetails,
  shopDetails,
  shopLocationDetails,
  shopSocialDetails,
  shopTimingDetails,
  categoriesSelection,
  paymentAcceptedFields,
};
