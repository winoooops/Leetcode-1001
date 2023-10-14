"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _125_1 = require("./125");
describe('125. isPalindrome', () => {
    it('A man, a plan, a canal: Panama', function () {
        const s = "A man, a plan, a canal: Panama";
        const result = (0, _125_1.isPalindrome)(s);
        expect(result).toBe(true);
    });
    it('race a car', function () {
        const s = "race a car";
        const result = (0, _125_1.isPalindrome)(s);
        expect(result).toBe(false);
    });
    it('just space', function () {
        const s = " ";
        const result = (0, _125_1.isPalindrome)(s);
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=125.spec.js.map