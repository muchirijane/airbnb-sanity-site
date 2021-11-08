export default {
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "reviewDescription",
      title: "Review Description",
      type: "string",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      description: "rate from 1-5",
      validation: (Rule) => Rule.required().min(1).max(5),
      layout: "radio",
    },

    {
      name: "reviewDate",
      title: "Review Date",
      type: "date",
    },
    {
      name: "traveller",
      title: "Traveller",
      type: "traveller",
    },
  ],
};
