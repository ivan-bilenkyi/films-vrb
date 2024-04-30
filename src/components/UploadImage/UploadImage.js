import cloudinary from "cloudinary-core";

const name = import.meta.env.VITE_CLOUD_NAME;
const preset = import.meta.env.VITE_UPLOAD_PRESET;

const cloudinaryCore = new cloudinary.Cloudinary({
    cloud_name: name,
});
export const UploadImage = async (file) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset);

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${
                cloudinaryCore.config().cloud_name
            }/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error("Failed to upload image");
        }

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw error;
    }
};

