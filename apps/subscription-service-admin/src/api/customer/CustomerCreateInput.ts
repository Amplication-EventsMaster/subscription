import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  events?: EventCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  phone_2?: string | null;
};
