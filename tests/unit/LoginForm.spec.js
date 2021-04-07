import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emit an event with a user data payload", () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find('input[type="text"]');

    input.setValue("Choke");
    wrapper.trigger("submit");
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: "Choke" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toEqual(expectedPayload);
  });
});
