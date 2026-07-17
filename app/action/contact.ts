"use server";

export async function contact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log({
    name,
    email,
    message,
  });


}