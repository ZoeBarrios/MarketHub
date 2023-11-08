export function validateForm(formData) {
  const errors = {};

  if (!formData.Name) {
    errors.Name = "Name is required";
  }
  if (!formData.Description) {
    errors.Description = "Description is required";
  }
  if (!formData.Price) {
    errors.Price = "Price is required";
  } else if (formData.Price < 0) {
    errors.Price = "Price must be greater than 0";
  }
  if (!formData.Stock) {
    errors.Stock = "Stock is required";
  } else if (formData.Stock < 0) {
    errors.Stock = "Stock must be greater than 0";
  }
  if (!formData.Image) {
    errors.Image = "Image is required";
  }

  return errors;
}
