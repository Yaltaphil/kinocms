import { shallowMount } from "@vue/test-utils";
import BaseSwitcher from "@/components/base/BaseSwitcher.vue";

let wrapper = null;
const someText = "lorem10";

beforeEach(() => {
    wrapper = shallowMount(BaseSwitcher, {
        propsData: { checked: false },
        slots: {
            default: someText,
        },
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe("Testing BaseSwitcher Component", () => {
    test("This switsher exists and visible:", () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();
    });

    test("Props comes to switcher:", () => {
        expect(wrapper.vm.checked).toBeDefined();
        expect(wrapper.vm.checked).toBe(false);
    });

    test("Slot works ok:", () => {
        expect(wrapper.find("label").text()).toMatch(someText);
    });

    test("Switcher switches:", () => {
        expect(wrapper.find("input").setChecked()).toBeTruthy();
    });

    test("Switcher emits the event:", () => {
        wrapper.find("input").trigger("change");
        expect(wrapper.emitted("change")).toBeTruthy();
    });

    test("Switcher matches snapshot:", () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});
