import React from 'react'
import Nav from './components/Nav'
import DefaultImg from './DefaultProfile.png'

function UpdateProfile() {
  const uploadedImage = React.useRef(null)
  const imageUploader = React.useRef(null)

  const handleImageUpload = (e) => {
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const { current } = uploadedImage
      current.file = file
      reader.onload = (e) => {
        current.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <Nav />
      <div className="container">
        <div style={{ marginTop: '4rem' }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingBottom: '11.250px' }}>
              <h4>
                <b>ProfileUpdate</b>
              </h4>
            </div>
            <div
              className="col s12"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                  display: 'none',
                }}
              />
              <div
                style={{
                  height: '130px',
                  width: '130px',
                  border: '3px solid #ff5722',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  marginBottom: '20px',
                }}
                onClick={() => imageUploader.current.click()}
              >
                <img
                  src={DefaultImg}
                  ref={uploadedImage}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'acsolute',
                    borderRadius: '50%',
                  }}
                  alt="profile img"
                />
              </div>
            </div>
            <div className="input-field col s12">
              <input
                disabled
                id="disabled"
                type="text"
                class="validate"
              ></input>
              <label htmlFor="person">
                <i className="material-icons left">person</i>
              </label>
            </div>
            <div className="input-field col s12">
              <input disabled id="disabled" type="text" class="validate" />
              <label htmlFor="email">
                <i className="material-icons left">mail</i>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile
