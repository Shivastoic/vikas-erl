export default function ContactForm(){

    return (

        <form className="flex flex-col gap-4 rounded-2xl">
            <div className="flex gap-4">
                <input 
                    type="text" 
                    required 
                    name="fname"
                    placeholder="First Name"
                    className="border-2 border-black/20 px-4 py-2 placeholder:text-black/60 text-black rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-black"
                />
                <input 
                    type="text" 
                    required 
                    name="lname"
                    placeholder="Last Name"
                    className="border-2 border-black/20 px-4 py-2 placeholder:text-black/60 text-black rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-black"
                />
            </div>
            <input 
                type="text" 
                required 
                name="email"
                placeholder="Email"
                className="border-2 border-black/20 px-4 py-2 placeholder:text-black/60 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
            <div className="flex gap-4">
                <input 
                    type="number" 
                    required 
                    name="phone"
                    placeholder="Phone No."
                    className="flex-1 border-2 border-black/20 px-4 py-2 placeholder:text-black/60 text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                />
                <select 
					name="Interested" 
					required
					className="flex-1 border-2 border-black/20 rounded-lg px-4 py-2 w-full placeholder:text-black/60 text-black focus:outline-none focus:ring-1 focus:ring-black"
				>
					<option className='text-black' value="">Select Interest</option>
					<option className='text-black' value="Courses">Courses</option>
					<option className='text-black' value="Services">Services</option>
				</select>
            </div>
            <textarea 
                type="number" 
                required 
                name="message"
                placeholder="Message"
                rows={ 5 }
                className="border-2 border-black/20 px-4 py-2 placeholder:text-black/60 text-black rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button className="px-6 py-2 border-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 text-black duration-200 border-black rounded-full w-fit font-medium font-sora">Submit</button>
        </form>

    )

}
