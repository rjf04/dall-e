**###DALL-E Project to create AI generated images**

This project allows users to generate images that are actually developed by AI.

Here, the user is asked to enter a prompt along with their names. This prompt is sent to the API via the backend and an image is generated. The image is then displayed along with the prompt. This project allows users to come up with innovative prompts for which the corresponding images can be generated. Moreover, there are some prompts that are already stored and can be randomly generated.

The images are stored in cloudinary and the link to the images is kept by creating a schema in MongoDB. Also, the Dall-E API is used to generate the images. Please note that Dall-E API is paid(at the time of making this README), hence, a local image is used in the code for the purpose of testing.'

**Steps To Run:**

1. Install the necessary npm packages.
2. Create an account in MongoDB, Cloudinary as well as in OpenAI for the API calls.
3. Run the server using the command "npm start".
4. Run the client by using "npm run dev".
5. The interface will be displayed on your screen. You can search any particular image in the search option.
6. Go to create page to create a new image. Enter a prompt and hit on "Generate". Yo can also have this image displayed on the home page by choosing to share it.
