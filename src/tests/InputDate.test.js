import { mount } from "@vue/test-utils";
import InputDate from "@/components/base/BaseSwitcher.vue";

describe("Testing InputDate Component", () => {
    const someDate = new Date(1341546546);
    const wrapper = mount(InputDate, {
        propsData: { value: someDate },
    });
    test("This dater exists and visible:", () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();
    });

    // test("Props comes to it:", () => {
    //     expect(wrapper.props("value")).toBeDefined();
    // });

    test("InputDate matches snapshot:", () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
