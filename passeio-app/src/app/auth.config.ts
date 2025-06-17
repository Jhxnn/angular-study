import { AuthConfig } from "angular-oauth2-oidc";


export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',  
    redirectUri: window.location.origin,
    clientId: '398887003738-9hnbkl31d92fln3ikrk2k7ki6e9vsoq8.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}