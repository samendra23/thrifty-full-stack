# Thrifty


## App Setup (localhost)

```
git clone https://github.com/John-Weeks-Dev/ebay-clone.git

cp .env.example .env
```

You'll have to set up a Supabase account & Stripe account, then add all of the details into your .env file.

Once you've connected your application to Supabase. You'll also need to set up the Auth Providers:
    Google [Google](https://cloud.google.com)
    
    https://supabase.com/docs/guides/auth/social-login/auth-google
    
Now run the command to migrate your database tables and run your seed file.
    
```
npx prisma migrate dev --name init

npx prisma generate

npx prisma db seed

npm i

npm run dev
```

You should be good to go! If you need any more help, take a look at the tutorial video by clicking the image above.

