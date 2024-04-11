export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
}

export async function getProjectList() {
  const response = await fetch(
    `https://frontend-exam.digitalfortress.dev/projects`
  );
  const data = await response.json();
  return data;
}
