import "@/src/app/styles/globals.css";
import { Provider } from "./clients/components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
