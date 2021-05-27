import { shallowMount } from '@vue/test-utils'
import Hello from "@/components/HelloWorld.vue"

describe("helloWrold.vue for intro", () => {

    let getComponentTest = shallowMount(Hello)
    let hTxt = getComponentTest.find("h1");

    it("checking title", () => {
        expect((hTxt.text())).toBe("vLive");

    })

    it("button click", async () => {

        await getComponentTest.find("#iambutton").trigger("click")

        expect((hTxt.text())).toBe("welcome");

    })
})