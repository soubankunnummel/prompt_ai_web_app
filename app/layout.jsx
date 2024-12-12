import Nave from "@/components/Nave";
import Provider from "@/components/Provider";
import "@/styles/globals.css";
 

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nave />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
