import { mount } from "@vue/test-utils";
import BaseSwitcher from "@/components/base/BaseSwitcher.vue";

const someText = "lorem10";

describe("Testing BaseSwitcher Component", () => {
    const wrapper = mount(BaseSwitcher, {
        propsData: { checked: false },
        slots: {
            default: someText,
        },
    });
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
});
