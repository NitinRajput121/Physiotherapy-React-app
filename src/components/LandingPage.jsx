import React from 'react'
import { Menu } from 'lucide-react'
import BgVideo from '../assets/BG.mp4'


const LandingPage = () => {
  return (
     <div className="min-h-screen bg-white">
    <header className="bg-white shadow-sm sticky top-0">
  <nav className="container mx-auto px-4 py-4 flex justify-between items-center ">
    <div className="text-xl font-bold">LOGO</div>
    <div className="hidden md:flex space-x-4">
      <a href="#" className="text-gray-600 hover:text-gray-900">HOME</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">ABOUT</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">TREATMENTS</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">CONTACT</a>
    </div>
    <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
      <Menu className="h-6 w-6" />
    </button>
  </nav>
</header>



    <main>
      <section className="relative h-[50vh] md:h-[70vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={BgVideo}
      />
    
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">NICK ERICKSON</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Physical Therapy in Motion</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
            Book an Appointment
          </button>
        </div>
      </section> 


       <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 items-center">
          <div className="flex justify-center ">
            <img
              src="https://static.wixstatic.com/media/c22c23_7be5c30f877646d097bbd78318c14a00~mv2_d_3413_5120_s_4_2.png/v1/fill/w_570,h_790,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c22c23_7be5c30f877646d097bbd78318c14a00~mv2_d_3413_5120_s_4_2.png"
              alt="Nick Erickson"
              className="rounded-lg h-96"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT</h2>
            <p className="text-gray-600 mb-4">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p className="text-gray-600">
              This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </p>
          </div>
        </div>
      </section>
      

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">PHYSIOTHERAPY</h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center max-w-md mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4">INITIAL CONSULTATION</h3>
            <p className="text-gray-600 mb-4">I'm a tagline. Click here to add your own text and edit me.</p>
            <div className="flex justify-center items-center mb-4 gap-4">
              <span>1 hr 30 min</span>
              <span className="font-bold">$85</span>
            </div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md">
              Book Now
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <img
              src="https://static.wixstatic.com/media/c22c23_1e0fc07e072d43bdbf1be5574753a8ff~mv2_d_6720_4480_s_4_2.jpg/v1/crop/x_2100,y_820,w_2880,h_2880/fill/w_360,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1e0fc07e072d43bdbf1be5574753a8ff~mv2_d_6720_4480_s_4_2.jpg"
              alt="Treatment 1"
              className="rounded-lg w-full h-60"
            />
            <img
              src="https://static.wixstatic.com/media/c22c23_cbb7508393fc44029871ed18fe72dc6b~mv2_d_5300_3533_s_4_2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_cbb7508393fc44029871ed18fe72dc6b~mv2_d_5300_3533_s_4_2.jpg"
              alt="Treatment 2"
              className="rounded-lg w-full h-60"
            />
            <div className="bg-emerald-500 rounded-lg flex items-center justify-center p-4">
              <span className="text-white text-lg md:text-xl font-bold text-center">See All Treatments</span>
            </div>
          </div>
        </div>
      </section>

  
<div className=" bg-gray-100 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          INSURANCE
          <span className="block h-1 w-48 bg-black mx-auto mt-2"></span>
        </h1>
      </header>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-emerald-400 p-8 text-white md:w-1/3">
            <h2 className="text-2xl font-bold leading-tight">
              I accept nearly all major insurance plans.
            </h2>
          </div>
          <div className="bg-white p-8 md:w-2/3">
            <p className="text-gray-600">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <img src="https://static.wixstatic.com/media/84770f_e0fdfb5897bf4b2ab2f5e62b612c11ea~mv2.png/v1/fill/w_89,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%201%20copy%202.png" alt="US PLAN" className="h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/84770f_653be32b398b4110953aa49be3e4a848~mv2.png/v1/crop/x_0,y_0,w_178,h_153/fill/w_113,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%201%20copy%205.png" alt="MULTIPLAN" className="h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/84770f_b9727015a9aa4ab7b3d7c422c1d61bb4~mv2.png/v1/fill/w_98,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%201.png" alt="LifePlan" className="h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/84770f_f554caae60074828829b61d01a62d1dd~mv2.png/v1/crop/x_0,y_40,w_225,h_85/fill/w_149,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%201%20copy%204.png" alt="CliniMed" className="h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/84770f_b30fbad97fb143f2840ed5ec5868658f~mv2.png/v1/fill/w_99,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Artboard%201%20copy%203.png" alt="US Health" className="h-12 object-contain" />
          </div>
        </div>
      </div>
    </div>

      <section className="bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">THE CLINIC</h2>
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Clinic Map"
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-gray-600">
                1600 Amphitheatre Parkway<br />
                Mountain View, CA 94043<br />
                Email: info@mysite.com<br />
                Tel: 123-456-7890
              </p>
              <div className="mt-4">
                <h3 className="font-bold mb-2">Opening Hours:</h3>
                <p className="text-gray-600">
                  Mon - Fri: 7am - 10pm<br />
                  Saturday: 8am - 10pm<br />
                  Sunday: 8am - 11pm
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">CONTACT</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Type your message here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={4}
                ></textarea>
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 by Nick Erickson Physiotherapy. Powered and secured by Wix</p>
      </div>
    </footer>
  </div>
  )
}

export default LandingPage
