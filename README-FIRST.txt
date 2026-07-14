TRUTHOUTLAW CMS WEBSITE

This version gives the writer a login at:
https://YOUR-SITE.netlify.app/admin/

IMPORTANT
Decap CMS saves articles into a Git repository. The Netlify site must be connected to GitHub, GitLab, Bitbucket, or Azure DevOps. GitHub is the simplest route.

SETUP OVERVIEW

1. Upload this project to a new GitHub repository.
   Easy route:
   - Create a blank repository named truthoutlaw.
   - Choose “uploading an existing file.”
   - Upload every file and folder from this package.
   - Commit to the main branch.

2. Connect the EXISTING Netlify site to that repository.
   - Open the TruthOutlaw project in Netlify.
   - Project configuration
   - Build & deploy
   - Continuous deployment
   - Repository
   - Link repository
   - Choose the GitHub truthoutlaw repository
   - Build command: npm run build
   - Publish directory: _site
   - Deploy

3. Enable the writer login.
   - Project configuration
   - Identity
   - Enable Identity
   - Registration preferences: Invite only
   - Identity > Services > Git Gateway
   - Enable Git Gateway

4. Invite the writer.
   - Project configuration
   - Identity
   - Users
   - Invite users
   - Enter her email address
   - She clicks the invitation email and creates a password

5. Publish articles.
   - Visit https://YOUR-SITE.netlify.app/admin/
   - Log in
   - Articles
   - New Article
   - Publish

6. Change Cash App and site wording.
   - In /admin/, open Site Settings > Main Settings.
   - Change Cash App, tagline, description, and email.
   - Publish.

HOW IT WORKS
Each article is stored as a Markdown file in src/articles.
Publishing through the editor commits that file to the Git repository.
Netlify detects the commit, builds the site, and publishes the updated homepage and timeline.
