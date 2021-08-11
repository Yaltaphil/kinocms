import { shallowMount } from "@vue/test-utils";
import InputDate from "@/components/base/BaseSwitcher.vue";

let wrapper = null;
const someDate = new Date(1341546546);

beforeEach(() => {
    wrapper = shallowMount(InputDate, {
        propsData: { value: someDate },
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe("Testing InputDate Component", () => {
    test("This dater exists and visible:", () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();
    });

    test("Props comes to it:", () => {
        expect(wrapper.props()).toBeDefined();
    });

    test("InputDate matches snapshot:", () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
