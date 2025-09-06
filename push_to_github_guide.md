# How to Push Your Project to GitHub

This is a step-by-step guide for pushing your code to a GitHub repository using the command line.

### Prerequisites

-   You have [Git](https://git-scm.com/downloads) installed on your computer.
-   You have a [GitHub](https://github.com/) account.

---

### Step 1: Initialize a Git Repository

If your project is not already a Git repository, open a terminal or command prompt, navigate to your project's root directory (`c:\Users\olwet\Downloads\CuddleCare`), and run the following command:

```bash
git init
```

This command creates a new `.git` subdirectory in your project directory, which contains all of your necessary repository files.

### Step 2: Create a New Repository on GitHub

1.  Go to [GitHub](https://github.com) and log in.
2.  In the upper-right corner of any page, click `+`, and then click **New repository**.
3.  Give your repository a name (e.g., `cuddle-care-website`).
4.  You can add an optional description.
5.  Choose whether to make the repository public or private.
6.  **Important**: Do not initialize the new repository with a `README`, `.gitignore`, or license file if you have already run `git init` locally. You can add these files later.
7.  Click **Create repository**.

### Step 3: Link Your Local Repository to GitHub

On the next page, GitHub will show you the repository's URL. Copy it. It will look something like `https://github.com/your-username/your-repository-name.git`.

In your terminal, run the following command to link your local repository to the remote one on GitHub. Replace `<repository_url>` with the URL you just copied.

```bash
git remote add origin <repository_url>
```

To verify the new remote, you can run:
```bash
git remote -v
```

### Step 4: Stage and Commit Your Files

Now you need to choose which files to include in your first commit.

To add all files in your project to the staging area, run:

```bash
git add .
```

Next, commit the staged files with a descriptive message:

```bash
git commit -m "Initial commit"
```

### Step 5: Push Your Code to GitHub

Finally, push your committed changes from your local repository to the remote repository on GitHub.

If your default branch is named `main` (common for new repositories):

```bash
git push -u origin main
```

If your default branch is named `master` (older default):

```bash
git push -u origin master
```

The `-u` flag sets the upstream branch, so for future pushes, you can simply run `git push`.

---

That's it! Your code is now on GitHub. You can refresh your repository page on GitHub to see your files.
