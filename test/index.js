/* eslint-disable */

// import mdDemo from '../res/md.demo'
const Valy = require('../dist/index')

const log = console.log
const line = () => console.log('\n')

// log(new Valy().valid('required').getRes())

// log(new Valy(0).valid('required').getRes())
// log(new Valy('').valid('required').getRes())
// log(new Valy('test').valid('required').getRes())

// line()

// log(new Valy(55.01).valid('max?max=55.02').getRes())
// log(new Valy(55.01).valid('max?max=55.009').getRes())

// line()

// log(new Valy(55.01).valid(['max?max=55.011', 'min?min=49', _ => _ === 55.01]).getRes())

// line()

// log(new Valy(55.01).valid(['max?max=55.011', 'min?min=49', '数字不为55']).getRes())

// line()

Valy.use({
  max56 () {
    console.log('max56')
    return 'max?max=55'
  },
  min56 () {
    console.log('min56')
    return 'min?min=56'
  },
  maxmin: 'max56||min56',
  maxminRequired: 'max56||min56||required'
})
log(
  new Valy(55.01)
    .required()
    .number()
    .min({ min: 55 })
    .max({ max: 60 })
    .maxminRequired()
    .valid(/^55.01$/)
    .valid([_ => [ _ => [ _ => _ < 56 ] ]])
    .getRes()
)
