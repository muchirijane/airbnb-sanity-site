export default {
  name: "property",
  title: "property",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "place",
      title: "Place",
      description: "Entire the city and country of the location",
      validate: (Rule) => Rule.required(),
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Residential House", value: "Residential house" },
          { title: "Guest House", value: "Guest house" },

          { title: "Apartment", value: "Apartment" },
          { title: "Cabin", value: "cabin" },
          { title: "Town house", value: "Town house" },
          { title: "Condo", value: "condo" },
          { title: "Bed and Breakfast", value: "Bed and breakfast" },
          { title: "Room Boutique Hotel", value: " Room boutique hotel" },
        ],
        layout: "radio",
      },
    },

    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "propertyImage" }],
    },
    {
      name: "pricePerNight",
      title: "Price Per Night",
      type: "number",
    },
    {
      name: "beds",
      title: "Beds",
      type: "number",
    },
    {
      name: "bedRoom",
      title: "Bed Room",
      type: "number",
    },
    {
      name: "bathRoom",
      title: "Bath Room",
      type: "number",
    },
    {
      name: "guests",
      title: "Guests",
      type: "number",
    },
    {
      name: "host",
      title: "Host",
      type: "host",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
  ],
};
