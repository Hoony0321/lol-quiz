import "@/src/clients/styles/globals.css";
import { Provider } from "@/src/clients/components/chakra/provider";
import Header from "@/src/clients/components/common/Header";
import { Toaster } from "@/src/clients/components/chakra/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressContentEditableWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </head>

      <body>
        <Provider>
          <div style={{ width: "100%", height: "90vh" }}>
            <div
              style={{
                maxWidth: "1024px",
                width: "100%",
                height: "100%",
                margin: "0 auto",
                padding: "0 2.5rem",
              }}
            >
              <Header />

              {children}

              <Toaster />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
