const isValid = async (first_Name, last_Name, email, password) => {
  if (!first_Name || typeof first_Name !== 'string' || first_Name.length < 3) return false;
  if (!last_Name || typeof last_Name !== 'string' || last_Name.length < 3) return false;
  if (!email || typeof email !== 'string' || email.length < 3) return false;
  if (!password || typeof password !== 'string' || password.length < 6) return false;

  return true;
};