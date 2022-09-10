const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="mx-auto max-w-[800px]">
      <div className="p-5">
        <header className="text-white font-bold text-4xl text-center p-2">
          Contact Me
        </header>
        <div className="px-4 overflow-hidden">
          <form onSubmit={handleSubmit} className="py-8 block text-white mx-auto">
            <div className="flex flex-col sm:grid sm:grid-cols-2 items-center sm:justify-between">

              <div className="p-2">
                <input type="text" name="name" placeholder="Your Name" required/>
              </div>

              <div className="p-2">
                <input type="email" name="email" placeholder="Your Email" required/>
              </div>

            </div>


            <div className="mx-auto max-w-[300px] sm:max-w-full px-2 mb-4">
              <textarea name="message" className="w-full rounded-3xl bg-gray-200 text-black outline-none p-4 min-h-[150px]" placeholder="Type your message here" />
            </div>

            <div className="text-center">
            <button type="submit" className="bg-color-[ff5ce5] items-center  bg-gradient-to-r from-[#ad00ff] to-[#ff5ce5] hover:from-[#9a0edbe7] hover:to-[#e154c9e2] shadow rounded-3xl p-4 px-10 font-bold text-white" >Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
