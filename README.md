# 🌍 SemaTell: The Prediction Game

## 🎯 Project Overview

**SemaTell** is a simple, fun prediction game where you prove how much you know about African culture, music, and events. It turns your passion into a competition by letting you **predict outcomes** and **earn status** based on your skill.

We are building a platform that is easy to use and fair. It’s a place to show off your knowledge and compete with friends.

**The Goal:** To become the most trusted and engaging platform for forecasting the future of African culture.
## ❌ The Problem SemaTell Solves

Prediction markets are powerful, but most people don't use them because they are:

* **Boring and Confusing:** They feel like a complex stock market, full of financial jargon and complicated charts.
* **Too Focused on Money:** They focus only on huge global events (like the stock market or major elections), ignoring everyday passions.
* **Hard to Access:** Most platforms aren't built for mobile phones or for people who just want to bet small amounts for fun.

This means millions of people who are passionate experts in African music, movies, and culture have **no fun way to test and earn from their knowledge.**

## ✅ Our Solution: SemaTell

SemaTell changes prediction markets by making them a **simple, social game:**

* **It's a Game, Not a Stock Market:** We use **Knowledge Points (KP)**, **Leagues**, and **Duels** to make predicting outcomes competitive and fun.
* **Culture First:** We focus on the most engaging topics in African entertainment and local trends, making predictions relevant to your daily life.
* **Easy for Everyone:** The design is simple, and the rules are clear. You don't need to be a financial expert; you just need to be an expert in your culture.


## 💡 How SemaTell Works (Key Features)

### 1. The Knowledge Point (KP) System

All stakes and earnings use **Knowledge Points (KP)**, making the game simple and fun.

* **Game Currency:** KP is the main currency on the platform. You can get KP by depositing money (crypto/fiat) or sometimes by getting free daily rewards.
* **Be Fast, Earn More:** If you predict correctly, you get KP. You get *much more* KP if you bet correctly **early**—when the market odds were still low. This rewards true insight!

### 2. The Prediction Leagues

Compete with others and prove you're the best forecaster.

* **Tiers:** You move up through levels (Bronze, Silver, Gold, Diamond) based on how accurate you are each week.
* **Local Competition:** Leagues are organized by topic and location (e.g., "Afrobeats Masters," "Lagos Movie Experts"). You compete with people who know the same things you do.
* **Status Rewards:** Reaching high tiers gives you special badges, better profile visibility, and unique access.

### 3. Challenge Your Friends (Duels)

Make predictions social and competitive.

* **Head-to-Head:** You can send a direct challenge to any friend or rival on any open market.
* **Public Score:** Your profile tracks how many Duels you've won, making your competition public and fun.

### 4. Smart Market Quality (AI-Powered)

We use technology to keep the markets fair and clear.

* **AI Fact-Checker:** Our AI system automatically checks if a new prediction question is clear, not already settled, and makes sense. This stops confusing or unfair markets from opening.
* **"Scout" Rewards:** If you suggest a high-quality question that the AI approves, you earn a **Scout Badge** and get a small reward from the market's fees.

---

## 🛠️ Tech Tools (For Developers)

The project is built to be flexible and work everywhere.

| Component | Technology | What It Does |
| :--- | :--- | :--- |
| **User Interface** | React / Next.js | Builds the fast, responsive website you see. |
| **Rules & Money** | EVM Smart Contracts | Code that manages stakes, winnings, and the rules fairly on the blockchain. |
| **Smart Checks** | Google Gemini (API) | The AI brain that validates and improves prediction questions. |
| **Tracking** | Database / Blockchain | Records your rank, streaks, and prediction history. |

---

## 🧑‍💻 Get Started

### What You Need

* Basic programming tools (Node.js, package manager)
* A tool to write and test blockchain code (like Hardhat)
* A key for the Gemini AI service.

### Set Up

1.  **Get the code:**
    ```bash
    git clone [Your Repository URL]
    cd sematell
    ```

2.  **Install tools:**
    ```bash
    yarn install
    # or
    npm install
    ```

3.  **Secrets File (.env):**
    Create a file named `.env` and put your necessary keys and links inside it.

### Run the App

1.  **Start the website:**
    ```bash
    yarn dev
    # or
    npm run dev
    ```
    The website will open on `http://localhost:3000`.

2.  **Launch the Contracts (Example):**
    ```bash
    npx hardhat compile
    npx hardhat run scripts/deploy.js --network [Your Network Name]
    ```

---

## 🤝 Help Us Build

We love help! Feel free to suggest fixes or new features:

1.  **Clone** this project.
2.  Create a new branch for your idea.
3.  Write your code and commit it.
4.  Submit a **Pull Request** (PR).

---

## ©️ License

MIT License. Check the `LICENSE` file for details.