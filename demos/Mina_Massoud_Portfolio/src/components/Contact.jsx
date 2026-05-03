import 'animate.css';
import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {
    const [state, handleSubmit] = useForm("mknabalo");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className='contact w-full py-20  min-h-[100vh] '>
        <section className="animate__animated animate__zoomIn ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-900 dark:text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="https://formspree.io/f/mknabalo" method="POST" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                <input type="email" id="email" name='_replyto' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="user@example.com" required />
              </div>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
             />
              <div>
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" name='subject' id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-white text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." defaultValue={""} />
              </div>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
              <button type="submit" value="Send" className="py-3 border-solid border-2 border-white bg-indigo-600 dark:lg:border-indigo-600 text-white  px-5 text-sm font-medium text-center hover:bg-indigo-600 transition duration-150 ease-in-out hover:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
          </div>
        </section>
        </div>
      );
}
