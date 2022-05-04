import RegistrationRepository from "./RegistrationRepository";

const repositories = {
  registration: RegistrationRepository,
};
export default {
  get: (name) => repositories[name],
};
