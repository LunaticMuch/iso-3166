import chai from 'chai'
import {
  getCountry,
  getSubdivisionByISO,
  getSubdivisionByLocal
} from '../src/index'

describe('Country codes', function () {
  it('Should validate country code', function () {
    chai.expect(getCountry('CH')?.name).to.equal('Switzerland')
  })
  it('Should return null for non-existing country', function () {
    chai.expect(getCountry('XX')).to.be.a('null')
  })
})

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
    }
    chai.expect(getSubdivisionByISO('AD-07'))
    .to.deep.include(result)
  })
  it('Should return empty for non-existing ISO code', function () {
    chai.expect(getSubdivisionByISO('XX')).to.be.an('array').that.is.empty
  })
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
    }
    chai.expect(getSubdivisionByLocal('AD','07'))
    .to.deep.include(result)
  })
  it('Should return empty for non-existing country and local code', function () {
    chai.expect(getSubdivisionByLocal('XX','YY')).to.be.an('array').that.is.empty
  })
})
