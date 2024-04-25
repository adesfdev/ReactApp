import { Formik, Form, Field } from "formik"

export const CreateUser = () => {
  
    return (
      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: 'you@me.com',
        password: '',
        password_hint: '',
        phone: '',
      }}
      onSubmit={async (values) => {
        console.log('Information submitted successfully')
        console.log(values)
      //   await new Promise((r) => setTimeout(r, 500));
      //   alert(JSON.stringify(values, null, 2));
      // }}
      }}
    >
      {/* <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="you@me.com"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <Field id="password" name="password" placeholder="password" type=""/>

        <label htmlFor="password_hint">Password Hint</label>
        <Field id="password_hint" name="password_hint" placeholder="" />

        <label htmlFor="phone">Phone</label>
        <Field id="phone" name="phone" placeholder="999-999-9999" type="tel"/>
        <button type="submit">Submit</button>
      </Form> */}

<Form>
  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', marginLeft: '10px', paddingLeft: '10px'}}>
    <label htmlFor="firstName">First Name</label>
    <Field id="firstName" name="firstName" placeholder="" />
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', marginLeft: '10px', paddingLeft: '10px'  }}>
    <label htmlFor="lastName">Last Name</label>
    <Field id="lastName" name="lastName" placeholder="" />
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', marginLeft: '10px', paddingLeft: '10px' }}>
    <label htmlFor="email">Email</label>
    <Field
      id="email"
      name="email"
      placeholder="you@me.com"
      type="email"
    />
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', marginLeft: '10px', paddingLeft: '10px' }}>
    <label htmlFor="password">Password</label>
    <Field id="password" name="password" placeholder="password" type="password" />
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', marginLeft: '10px', paddingLeft: '10px' }}>
    <label htmlFor="password_hint">Password Hint</label>
    <Field id="password_hint" name="password_hint" placeholder="" />
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', marginLeft: '10px', paddingLeft: '10px' }}>
    <label htmlFor="phone">Phone</label>
    <Field id="phone" name="phone" placeholder="999-999-9999" type="tel" />
  </div>

  <button style={{ marginLeft: '100px', marginTop: '130px' }} type="submit">Submit</button>
</Form>
    </Formik>
    );
};