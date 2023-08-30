"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const index_1 = require("../src/index");
describe('Country codes', function () {
    it('Should validate country code', function () {
        var _a;
        chai_1.default.expect((_a = (0, index_1.getCountry)('CH')) === null || _a === void 0 ? void 0 : _a.name).to.equal('Switzerland');
    });
    it('Should return null for non-existing country', function () {
        chai_1.default.expect((0, index_1.getCountry)('XX')).to.be.a('null');
    });
});
describe('Subdivisions codes', function () {
    it('Should validate subdivision ISO Code code', function () {
        const result = {
            country: 'AD',
            code: '07',
            iso_code: 'AD-07',
            type: 'parish',
            name: 'Andorra la Vella',
            variant: '',
            language: 'ca',
            romanization_system: '',
            parent_iso_code: ''
        };
        chai_1.default.expect((0, index_1.getSubdivisionByISO)('AD-07'))
            .to.deep.include(result);
    });
    it('Should return empty for non-existing ISO code', function () {
        chai_1.default.expect((0, index_1.getSubdivisionByISO)('XX')).to.be.an('array').that.is.empty;
    });
    it('Should validate subdivision with country and local code', function () {
        const result = {
            country: 'AD',
            code: '07',
            iso_code: 'AD-07',
            type: 'parish',
            name: 'Andorra la Vella',
            variant: '',
            language: 'ca',
            romanization_system: '',
            parent_iso_code: ''
        };
        chai_1.default.expect((0, index_1.getSubdivisionByLocal)('AD', '07'))
            .to.deep.include(result);
    });
    it('Should return empty for non-existing country and local code', function () {
        chai_1.default.expect((0, index_1.getSubdivisionByLocal)('XX', 'YY')).to.be.an('array').that.is.empty;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBdUI7QUFDdkIsd0NBSXFCO0FBRXJCLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDeEIsRUFBRSxDQUFDLDhCQUE4QixFQUFFOztRQUNqQyxjQUFJLENBQUMsTUFBTSxDQUFDLE1BQUEsSUFBQSxrQkFBVSxFQUFDLElBQUksQ0FBQywwQ0FBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzdELENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDZDQUE2QyxFQUFFO1FBQ2hELGNBQUksQ0FBQyxNQUFNLENBQUMsSUFBQSxrQkFBVSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQTtBQUVGLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUM3QixFQUFFLENBQUMsMkNBQTJDLEVBQUU7UUFDOUMsTUFBTSxNQUFNLEdBQUc7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLGVBQWUsRUFBRSxFQUFFO1NBQ3BCLENBQUE7UUFDRCxjQUFJLENBQUMsTUFBTSxDQUFDLElBQUEsMkJBQW1CLEVBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsK0NBQStDLEVBQUU7UUFDbEQsY0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFBLDJCQUFtQixFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUE7SUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMseURBQXlELEVBQUU7UUFDNUQsTUFBTSxNQUFNLEdBQUc7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLGVBQWUsRUFBRSxFQUFFO1NBQ3BCLENBQUE7UUFDRCxjQUFJLENBQUMsTUFBTSxDQUFDLElBQUEsNkJBQXFCLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO1FBQ2hFLGNBQUksQ0FBQyxNQUFNLENBQUMsSUFBQSw2QkFBcUIsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQTtJQUMvRSxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=