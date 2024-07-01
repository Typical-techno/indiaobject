import React, { useEffect, useState } from "react";
import TopHeadNameBar from "../../components/UI/TopHeadNameBar";
import { shopCategory } from "../../data/searchData";
import Alert from "../../components/UI/Alert";
import DOMPurify from "dompurify";
import axios from "axios";
import axiosInstance from "../../config/securityInstance";

export default function AddListingForm() {
  const [headName, setHeadName] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailedAlert, setShowFailedAlert] = useState(false);
  // Assuming you receive the access token after a successful authentication
  const accessToken = process.env.REACT_APP_BACK_JWT_TOKEN;
  localStorage.setItem("accessToken", accessToken);

  const [ownerDetails, setOwnerDetails] = useState({
    ownerName: "",
    ownerPhoneNumber: "",
    ownerWhatsappNumber: "",
    otherPhoneNumber: "",
    ownerEmailAddress: "",
  });
  const [shopDetails, setShopDetails] = useState({
    shopName: "",
    shopDescription: "",
    businessType: "",
    priceRange: "",
    shopWebsite: "",
  });
  const [shopLocationDetails, setShopLocationDetails] = useState({
    shopLocation: "",
    shopArea: "",
    shopLandmark: "",
    shopBuildingNumber: "",
    shopFloorNumber: "",
  });
  const [shopSocialDetails, setShopSocialDetails] = useState({
    shopFacebook: "",
    shopInstagram: "",
    shopTwitter: "",
    shopYoutube: "",
    shopLinkedin: "",
  });
  const [shopTimingDetails, setShopTimingDetails] = useState({
    mondayTiming: "",
    tuesdayTiming: "",
    wednesdayTiming: "",
    thursdayTiming: "",
    fridayTiming: "",
    saturdayTiming: "",
    sundayTiming: "",
  });
  const [categoriesSelection, setCategoriesSelection] = useState({
    category1: "",
    category2: "",
    category3: "",
    category4: "",
    category5: "",
  });
  const [paymentAcceptedFields, setPaymentAcceptedFields] = useState({
    cash: false,
    googlePay: false,
    paytm: false,
    phonePay: false,
    cards: false,
    cheque: false,
    bankTransfer: false,
    upi: false,
  });
  const [imagesFields, setImagesFields] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const [mapLocation, setMapLocation] = useState("");
  const [tagline, setTagline] = useState("");

  const handleInputChange = (section, field, value) => {
    const sanitizedValue = DOMPurify.sanitize(value);
    switch (section) {
      case "ownerDetails":
        setOwnerDetails({ ...ownerDetails, [field]: sanitizedValue });
        break;
      case "shopDetails":
        setShopDetails({ ...shopDetails, [field]: sanitizedValue });
        break;
      case "shopLocationDetails":
        setShopLocationDetails({
          ...shopLocationDetails,
          [field]: sanitizedValue,
        });
        break;
      case "shopSocialDetails":
        setShopSocialDetails({ ...shopSocialDetails, [field]: sanitizedValue });
        break;
      case "shopTimingDetails":
        setShopTimingDetails({ ...shopTimingDetails, [field]: sanitizedValue });
        break;
      case "categoriesSelection":
        setCategoriesSelection({
          ...categoriesSelection,
          [field]: sanitizedValue,
        });
        break;
      case "paymentAcceptedFields":
        setPaymentAcceptedFields({
          ...paymentAcceptedFields,
          [field]: sanitizedValue,
        });
        break;
      case "imagesFields":
        setImagesFields({ ...imagesFields, [field]: sanitizedValue });
        break;
      default:
        break;
    }
  };

  const handleFileChange = (field, file) => {
    setImagesFields((prev) => ({ ...prev, [field]: file }));
  };

  useEffect(() => {
    let tempName = window.location.pathname.replace("/", "");
    setHeadName(tempName);
  }, []);

  const ownerDetailsFields = [
    {
      labelId: "ownerName",
      title: "Owner's Name",
      type: "text",
      required: true,
      helperText: "Please enter the owner's full name.",
      value: ownerDetails.ownerName,
      section: "ownerDetails",
      field: "ownerName",
    },
    {
      labelId: "ownerPhoneNumber",
      title: "Phone Number",
      type: "tel",
      required: true,
      helperText: "Please enter the owner's primary contact number.",
      value: ownerDetails.ownerPhoneNumber,
      section: "ownerDetails",
      field: "ownerPhoneNumber",
    },
    {
      labelId: "ownerWhatsappNumber",
      title: "Whatsapp Number",
      type: "tel",
      required: false,
      helperText: "Please enter the owner's Whatsapp number, if any.",
      value: ownerDetails.ownerWhatsappNumber,
      section: "ownerDetails",
      field: "ownerWhatsappNumber",
    },
    {
      labelId: "otherPhoneNumber",
      title: "Other Phone Number",
      type: "tel",
      required: false,
      helperText: "Please enter another contact number, if any.",
      value: ownerDetails.otherPhoneNumber,
      section: "ownerDetails",
      field: "otherPhoneNumber",
    },
    {
      labelId: "ownerEmailAddress",
      title: "Email Address",
      type: "email",
      required: true,
      helperText: "Please enter the owner's email address.",
      value: ownerDetails.ownerEmailAddress,
      section: "ownerDetails",
      field: "ownerEmailAddress",
    },
  ];

  const shopDetailsFields = [
    {
      labelId: "shopName",
      title: "Business Name",
      type: "text",
      required: true,
      helperText: "Please enter the shop's name.",
      value: shopDetails.shopName,
      section: "shopDetails",
      field: "shopName",
    },
    {
      labelId: "shopDescription",
      title: "Description",
      type: "text",
      required: true,
      helperText: "Please provide a brief description of the shop.",
      value: shopDetails.shopDescription,
      section: "shopDetails",
      field: "shopDescription",
    },
    {
      labelId: "businessType",
      title: "Business Type",
      type: "text",
      required: true,
      helperText: "Please specify the type of business.",
      value: shopDetails.businessType,
      section: "shopDetails",
      field: "businessType",
    },
    {
      labelId: "priceRange",
      title: "Price Range",
      type: "text",
      required: false,
      helperText: "Please provide the price range of products or services.",
      value: shopDetails.priceRange,
      section: "shopDetails",
      field: "priceRange",
    },
    {
      labelId: "shopWebsite",
      title: "Website",
      type: "url",
      required: false,
      helperText: "Please enter the shop's website URL, if any.",
      value: shopDetails.shopWebsite,
      section: "shopDetails",
      field: "shopWebsite",
    },
  ];

  const shopLocationFields = [
    {
      labelId: "shopLocation",
      title: "Location",
      type: "text",
      required: true,
      helperText: "Please provide the shop's location.",
      value: shopLocationDetails.shopLocation,
      section: "shopLocationDetails",
      field: "shopLocation",
    },
    {
      labelId: "shopArea",
      title: "Area",
      type: "text",
      required: true,
      helperText: "Please enter the area where the shop is located.",
      value: shopLocationDetails.shopArea,
      section: "shopLocationDetails",
      field: "shopArea",
    },
    {
      labelId: "shopLandmark",
      title: "Landmark",
      type: "text",
      required: true,
      helperText: "Please provide a landmark near the shop.",
      value: shopLocationDetails.shopLandmark,
      section: "shopLocationDetails",
      field: "shopLandmark",
    },
    {
      labelId: "shopBuildingNumber",
      title: "Building Number",
      type: "text",
      required: true,
      helperText: "Please provide the building number, if any.",
      value: shopLocationDetails.shopBuildingNumber,
      section: "shopLocationDetails",
      field: "shopBuildingNumber",
    },
    {
      labelId: "shopFloorNumber",
      title: "Floor Number",
      type: "text",
      required: true,
      helperText: "Please provide the floor number, if any.",
      value: shopLocationDetails.shopFloorNumber,
      section: "shopLocationDetails",
      field: "shopFloorNumber",
    },
  ];

  const shopSocialFields = [
    {
      labelId: "shopFacebook",
      title: "Facebook",
      type: "url",
      required: false,
      helperText: "Please enter the shop's Facebook URL, if any.",
      value: shopSocialDetails.shopFacebook,
      section: "shopSocialDetails",
      field: "shopFacebook",
    },
    {
      labelId: "shopInstagram",
      title: "Instagram",
      type: "url",
      required: false,
      helperText: "Please enter the shop's Instagram URL, if any.",
      value: shopSocialDetails.shopInstagram,
      section: "shopSocialDetails",
      field: "shopInstagram",
    },
    {
      labelId: "shopTwitter",
      title: "Twitter",
      type: "url",
      required: false,
      helperText: "Please enter the shop's Twitter URL, if any.",
      value: shopSocialDetails.shopTwitter,
      section: "shopSocialDetails",
      field: "shopTwitter",
    },
    {
      labelId: "shopYoutube",
      title: "YouTube",
      type: "url",
      required: false,
      helperText: "Please enter the shop's YouTube URL, if any.",
      value: shopSocialDetails.shopYoutube,
      section: "shopSocialDetails",
      field: "shopYoutube",
    },
    {
      labelId: "shopLinkedin",
      title: "LinkedIn",
      type: "url",
      required: false,
      helperText: "Please enter the shop's LinkedIn URL, if any.",
      value: shopSocialDetails.shopLinkedin,
      section: "shopSocialDetails",
      field: "shopLinkedin",
    },
  ];

  const shopTimingFields = [
    {
      labelId: "mondayTiming",
      title: "Monday",
      type: "text",
      required: true,
      helperText: "Please enter the shop's Monday opening hours.",
      value: shopTimingDetails.mondayTiming,
      section: "shopTimingDetails",
      field: "mondayTiming",
    },
    {
      labelId: "tuesdayTiming",
      title: "Tuesday",
      type: "text",
      required: true,
      helperText: "Please enter the shop's Tuesday opening hours.",
      value: shopTimingDetails.tuesdayTiming,
      section: "shopTimingDetails",
      field: "tuesdayTiming",
    },
    {
      labelId: "wednesdayTiming",
      title: "Wednesday",
      type: "text",
      required: true,
      helperText: "Please enter the shop's Wednesday opening hours.",
      value: shopTimingDetails.wednesdayTiming,
      section: "shopTimingDetails",
      field: "wednesdayTiming",
    },
    {
      labelId: "thursdayTiming",
      title: "Thursday",
      type: "text",
      required: true,
      helperText: "Please enter the shop's Thursday opening hours.",
      value: shopTimingDetails.thursdayTiming,
      section: "shopTimingDetails",
      field: "thursdayTiming",
    },
    {
      labelId: "fridayTiming",
      title: "Friday",
      type: "text",
      required: true,
      helperText: "Please enter the shop's Friday opening hours.",
      value: shopTimingDetails.fridayTiming,
      section: "shopTimingDetails",
      field: "fridayTiming",
    },
    {
      labelId: "saturdayTiming",
      title: "Saturday",
      type: "text",
      required: true,
      helperText: "Please enter the shop's Saturday opening hours.",
      value: shopTimingDetails.saturdayTiming,
      section: "shopTimingDetails",
      field: "saturdayTiming",
    },
    {
      labelId: "sundayTiming",
      title: "Sunday",
      type: "text",
      required: true,
      helperText: "Please enter the shop's Sunday opening hours.",
      value: shopTimingDetails.sundayTiming,
      section: "shopTimingDetails",
      field: "sundayTiming",
    },
  ];

  const categoriesFields = [
    {
      labelId: "category1",
      title: "Category 1",
      type: "select",
      required: true,
      options: shopCategory,
      helperText: "Please select the first category.",
      value: categoriesSelection.category1,
      section: "categoriesSelection",
      field: "category1",
    },
    {
      labelId: "category2",
      title: "Category 2",
      type: "select",
      required: false,
      options: shopCategory,
      helperText: "Please select the second category, if any.",
      value: categoriesSelection.category2,
      section: "categoriesSelection",
      field: "category2",
    },
    {
      labelId: "category3",
      title: "Category 3",
      type: "select",
      required: false,
      options: shopCategory,
      helperText: "Please select the third category, if any.",
      value: categoriesSelection.category3,
      section: "categoriesSelection",
      field: "category3",
    },
    {
      labelId: "category4",
      title: "Category 4",
      type: "select",
      required: false,
      options: shopCategory,
      helperText: "Please select the fourth category, if any.",
      value: categoriesSelection.category4,
      section: "categoriesSelection",
      field: "category4",
    },
    {
      labelId: "category5",
      title: "Category 5",
      type: "select",
      required: false,
      options: shopCategory,
      helperText: "Please select the fifth category, if any.",
      value: categoriesSelection.category5,
      section: "categoriesSelection",
      field: "category5",
    },
  ];

  const paymentAcceptedFieldsArray = [
    {
      labelId: "cash",
      title: "Cash",
      type: "checkbox",
      value: paymentAcceptedFields.cash,
      section: "paymentAcceptedFields",
      field: "cash",
    },
    {
      labelId: "googlePay",
      title: "Google Pay",
      type: "checkbox",
      value: paymentAcceptedFields.googlePay,
      section: "paymentAcceptedFields",
      field: "googlePay",
    },
    {
      labelId: "paytm",
      title: "Paytm",
      type: "checkbox",
      value: paymentAcceptedFields.paytm,
      section: "paymentAcceptedFields",
      field: "paytm",
    },
    {
      labelId: "phonePay",
      title: "PhonePay",
      type: "checkbox",
      value: paymentAcceptedFields.phonePay,
      section: "paymentAcceptedFields",
      field: "phonePay",
    },
    {
      labelId: "cards",
      title: "Cards",
      type: "checkbox",
      value: paymentAcceptedFields.cards,
      section: "paymentAcceptedFields",
      field: "cards",
    },
    {
      labelId: "cheque",
      title: "Cheque",
      type: "checkbox",
      value: paymentAcceptedFields.cheque,
      section: "paymentAcceptedFields",
      field: "cheque",
    },
    {
      labelId: "bankTransfer",
      title: "Bank Transfer",
      type: "checkbox",
      value: paymentAcceptedFields.bankTransfer,
      section: "paymentAcceptedFields",
      field: "bankTransfer",
    },
    {
      labelId: "upi",
      title: "UPI",
      type: "checkbox",
      value: paymentAcceptedFields.upi,
      section: "paymentAcceptedFields",
      field: "upi",
    },
  ];

  const mapLocationField = {
    labelId: "mapLocation",
    title: "Map Location",
    type: "text",
    required: true,
    helperText: "Please provide the shop's map location.",
    value: mapLocation,
    section: "mapLocation",
    field: "mapLocation",
  };

  const taglineField = {
    labelId: "tagline",
    title: "Add Keyword",
    type: "text",
    required: true,
    helperText: "Please provide a tagline for the shop.",
    value: tagline,
    section: "tagline",
    field: "tagline",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const img1 = imagesFields.image1;
    const img2 = imagesFields.image2;
    const img3 = imagesFields.image3;

    const requestData = {
      ownerDetails,
      shopDetails,
      shopLocationDetails,
      shopSocialDetails,
      shopTimingDetails,
      categoriesSelection,
      paymentAcceptedFields,
      mapLocation,
      tagline,
      img1,
      img2,
      img3,
    };
    console.log(requestData);

    try {
      const response = await axiosInstance.post(
        "/panelListing/create",
        requestData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 30000,
        }
      );
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);
      console.log("Response:", response.data);
    } catch (error) {
      setShowFailedAlert(true);
      setTimeout(() => {
        setShowFailedAlert(false);
      }, 3000);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="pt-20 w-full">
      <TopHeadNameBar headName={headName} />
      <div className="w-full justify-center items-center flex px-0 xl:px-52">
        {showSuccessAlert && <Alert message="Form submitted successfully!" />}
        {showFailedAlert && (
          <Alert message="Faced an ERROR while submitting Form" />
        )}
        <form
          className="bg-blue-50 w-full justify-center flex flex-col py-12 gap-12"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full flex flex-col px-12 gap-6 text-left">
              <p className="font-bold text-2xl py-2">Owner Details</p>
              {ownerDetailsFields.map((fields, index) => (
                <div key={index} className="flex flex-col w-full relative">
                  <label
                    htmlFor={fields.labelId}
                    className="text-left -top-3 left-6 absolute bg-blue-50"
                  >
                    {fields.title}
                  </label>
                  <label
                    className={`absolute top-3 right-4 ${
                      fields.required ? "text-rose-300" : "hidden"
                    }`}
                  >
                    *
                  </label>
                  <input
                    type={fields.type}
                    id={fields.labelId}
                    className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm focus:outline-blue-300 focus:text-xl bg-transparent duration-150"
                    required={fields.required}
                    value={fields.value}
                    onChange={(e) =>
                      handleInputChange(
                        fields.section,
                        fields.field,
                        e.target.value
                      )
                    }
                  />
                  <p className="text-xs text-gray-500 py-1 px-6">
                    {fields.helperText}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col px-12 gap-6 text-left">
              <p className="font-bold text-2xl py-2">Business Basic Details</p>
              {shopDetailsFields.map((fields, index) => (
                <div key={index} className="flex flex-col w-full relative">
                  <label
                    htmlFor={fields.labelId}
                    className="text-left -top-3 left-6 absolute bg-blue-50"
                  >
                    {fields.title}
                  </label>
                  <label
                    className={`absolute top-3 right-4 ${
                      fields.required ? "text-rose-300" : "hidden"
                    }`}
                  >
                    *
                  </label>
                  <input
                    type={fields.type}
                    id={fields.labelId}
                    className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm focus:text-xl bg-transparent duration-150"
                    required={fields.required}
                    value={fields.value}
                    onChange={(e) =>
                      handleInputChange(
                        fields.section,
                        fields.field,
                        e.target.value
                      )
                    }
                  />
                  <p className="text-xs text-gray-500 py-1 px-6">
                    {fields.helperText}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full flex flex-col px-12 gap-6 text-left">
              <p className="font-bold text-2xl py-2">
                Business Location Details
              </p>
              {shopLocationFields.map((fields, index) => (
                <div key={index} className="flex flex-col w-full relative">
                  <label
                    htmlFor={fields.labelId}
                    className="text-left -top-3 left-6 absolute bg-blue-50"
                  >
                    {fields.title}
                  </label>
                  <label
                    className={`absolute top-3 right-4 ${
                      fields.required ? "text-rose-300" : "hidden"
                    }`}
                  >
                    *
                  </label>
                  <input
                    type={fields.type}
                    id={fields.shopLocationLabelId}
                    className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm focus:outline-blue-300 focus:text-xl bg-transparent duration-150"
                    required={fields.required}
                    value={fields.value}
                    onChange={(e) =>
                      handleInputChange(
                        fields.section,
                        fields.field,
                        e.target.value
                      )
                    }
                  />
                  <p className="text-xs text-gray-500 py-1 px-6">
                    {fields.helperText}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col px-12 gap-6 text-left">
              <p className="font-bold text-2xl py-2">Social Details</p>
              {shopSocialFields.map((fields, index) => (
                <div key={index} className="flex flex-col w-full relative">
                  <label
                    htmlFor={fields.labelId}
                    className="text-left -top-3 left-6 absolute bg-blue-50"
                  >
                    {fields.title}
                  </label>
                  <label
                    className={`absolute top-3 right-4 ${
                      fields.required ? "text-rose-300" : "hidden"
                    }`}
                  >
                    *
                  </label>
                  <input
                    type={fields.type}
                    id={fields.labelId}
                    className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm focus:text-xl bg-transparent duration-150"
                    required={fields.required}
                    value={fields.value}
                    onChange={(e) =>
                      handleInputChange(
                        fields.section,
                        fields.field,
                        e.target.value
                      )
                    }
                  />
                  <p className="text-xs text-gray-500 py-1 px-6">
                    {fields.helperText}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full flex flex-col px-12 gap-6 text-left">
              <p className="font-bold text-2xl py-2">Business Map Location</p>
              <div className="flex flex-col w-full relative">
                <label
                  htmlFor={mapLocationField.labelId}
                  className="text-left -top-3 left-6 absolute bg-blue-50"
                >
                  {mapLocationField.title}
                </label>
                <label className={`absolute top-3 right-4 text-rose-300`}>
                  *
                </label>
                <input
                  type={mapLocationField.type}
                  id={mapLocationField.labelId}
                  value={mapLocation}
                  required={mapLocationField.required}
                  onChange={(e) => setMapLocation(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm focus:outline-blue-300 focus:text-xl bg-transparent duration-150"
                  pattern="https://.*"
                />
                <p className="text-xs text-gray-500 py-1 px-6">
                  {"eg: https://maps.google.com"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full flex flex-col px-12 pb-12 xl:pb-0 gap-10 text-left">
              <p className="font-bold text-2xl">Business Categories</p>
              {categoriesFields.map((fields, index) => (
                <div key={index} className="flex flex-col w-full relative">
                  <label
                    htmlFor={fields.labelId}
                    className="text-left -top-3 left-6 absolute bg-blue-50"
                  >
                    {`${fields.title}`}
                  </label>
                  <label
                    className={`absolute top-3 right-4 ${
                      fields.required ? "text-rose-300" : "hidden"
                    }`}
                  >
                    *
                  </label>
                  <select
                    type={fields.type}
                    id={fields.labelId}
                    className="w-full rounded-t-lg rounded-b-lg border-2 border-gray-300 p-2 text-base focus:text-xl bg-transparent duration-150 focus:rounded-b-none"
                    required={fields.required}
                    style={{ appearance: "none" }}
                    value={fields.value}
                    onChange={(e) =>
                      handleInputChange(
                        fields.section,
                        fields.field,
                        e.target.value
                      )
                    }
                  >
                    {shopCategory.map((items, index) => (
                      <option key={index} className="rounded-b-lg">
                        {items}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col px-12 gap-6 text-left">
              <p className="font-bold text-2xl py-2">Tagline / Keywords</p>
              <div className="flex flex-col w-full relative">
                <label
                  htmlFor={taglineField.labelId}
                  className="text-left -top-3 left-6 absolute bg-blue-50"
                >
                  {taglineField.title}
                </label>
                <label className="absolute top-3 right-4 text-rose-300">
                  *
                </label>
                <input
                  type={taglineField.type}
                  id={taglineField.labelId}
                  value={tagline}
                  required={taglineField.required}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm focus:text-xl bg-transparent duration-150"
                />
                <p className="text-xs text-gray-500 py-1 px-6">
                  {"eg: cars, servicing, detailing, etc"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full px-12 text-left">
              <p className="font-bold text-2xl py-2">Payment Accepted</p>
              <div className="gap-6 px-12 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {paymentAcceptedFieldsArray.map((fields, index) => (
                  <div key={index} className="flex flex-col w-full relative">
                    <label
                      htmlFor={fields.labelId}
                      className="text-left -top-3 left-6 absolute bg-blue-50"
                    >
                      {fields.title}
                    </label>
                    <input
                      type={fields.type}
                      id={fields.labelId}
                      className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm focus:outline-blue-300 focus:text-xl duration-150"
                      required={fields.required}
                      value={fields.value}
                      onChange={(e) =>
                        handleInputChange(
                          fields.section,
                          fields.field,
                          e.target.value
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full px-12 text-left">
              <p className="font-bold text-2xl py-2">Business Timings</p>
              <div className="gap-6 px-12 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {shopTimingFields.map((fields, index) => (
                  <div key={index} className="flex flex-col w-full relative">
                    <label
                      htmlFor={fields.labelId}
                      className="text-left -top-3 left-6 absolute bg-blue-50"
                    >
                      {fields.title}
                    </label>
                    <label
                      className={`absolute top-3 right-4 ${
                        fields.required ? "text-rose-300" : "hidden"
                      }`}
                    >
                      *
                    </label>
                    <input
                      type={fields.type}
                      id={fields.labelId}
                      className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm focus:outline-blue-300 focus:text-xl bg-transparent duration-150"
                      required={fields.required}
                      value={fields.value}
                      onChange={(e) =>
                        handleInputChange(
                          fields.section,
                          fields.field,
                          e.target.value
                        )
                      }
                    />
                    <p className="text-xs text-gray-500 py-1 px-6">
                      {fields.helperText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full px-12 text-left">
              <p className="font-bold text-2xl py-2">Business Images</p>
              <div className="gap-6 px-12 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {Object.keys(imagesFields).map((key, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-full"
                  >
                    <label
                      htmlFor={`image${index + 1}`}
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent hover:bg-gray-300"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 overflow-hidden">
                        {imagesFields[key] ? (
                          <img
                            src={URL.createObjectURL(imagesFields[key])}
                            alt={`Preview ${key}`}
                            className="w-full h-2/4 md:h-3/4 object-cover"
                          />
                        ) : (
                          <>
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3a3 3 0 0 0-6 0v7m9 3h-4.586a2 2 0 0 0-2.828 0L6 16M3 3l9 6 9-6M3 13h10M3 5h10"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </>
                        )}
                      </div>
                    </label>
                    <input
                      id={`image${index + 1}`}
                      type="file"
                      className="hidden"
                      accept=".png, .jpg, .jpeg"
                      required
                      onChange={(e) =>
                        handleFileChange(`image${index + 1}`, e.target.files[0])
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 rounded-xl mx-12 mt-12 py-2 text-xl font-bold text-white"
          >
            Add Business
          </button>
        </form>
      </div>
    </div>
  );
}
