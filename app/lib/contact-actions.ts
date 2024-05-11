'use server';

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: 'The name field must be filled in!' }),
  email: z
    .string()
    .trim()
    .min(3, { message: 'This email field must to be filled.' })
    .email(),
  message: z
    .string()
    .min(3, { message: 'The message field must be filled in!' }),
});

export async function contact(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const validatedFields = ContactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Invalid data entered. Couldn't send message!",
      };
    }

    const { name, email, message } = validatedFields.data;

    // TODO: need implement sending email functionality
    await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            name,
            email,
            message,
          }),
        3000,
      ),
    );

    return {
      data: {
        success: true,
        errors: false,
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to send message.');
  }
}
