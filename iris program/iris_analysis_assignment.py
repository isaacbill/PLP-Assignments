# Iris Dataset Analysis Assignment

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# =========================
# Task 1: Load and Explore the Dataset
# =========================

try:
    df = pd.read_csv("iris.csv")
    print("✅ Dataset loaded successfully!")
except FileNotFoundError:
    print("❌ File not found. Please make sure iris.csv is in the working directory.")
except Exception as e:
    print("❌ Error while loading dataset:", e)

print("\n🔎 First 5 rows:")
print(df.head())

print("\n📊 Dataset Info:")
print(df.info())

print("\n🧹 Missing Values:")
print(df.isnull().sum())

# =========================
# Task 2: Basic Data Analysis
# =========================

print("\n📈 Descriptive Statistics:")
print(df.describe())

grouped = df.groupby("species").mean()
print("\n📊 Mean values grouped by species:")
print(grouped)

print("""
### 🔎 Insights:
1. Setosa has the smallest petals overall.  
2. Virginica has the largest sepal and petal sizes.  
3. Versicolor lies between Setosa and Virginica.  
""")

# =========================
# Task 3: Data Visualization
# =========================

# 1. Line chart
plt.figure(figsize=(8,5))
plt.plot(df.index, df["sepal length (cm)"], label="Sepal Length")
plt.plot(df.index, df["petal length (cm)"], label="Petal Length")
plt.title("Line Chart: Sepal vs Petal Length Trend")
plt.xlabel("Sample Index")
plt.ylabel("Length (cm)")
plt.legend()
plt.show()

# 2. Bar chart
plt.figure(figsize=(6,4))
sns.barplot(x="species", y="petal length (cm)", data=df, ci=None)
plt.title("Average Petal Length per Species")
plt.xlabel("Species")
plt.ylabel("Average Petal Length (cm)")
plt.show()

# 3. Histogram
plt.figure(figsize=(6,4))
plt.hist(df["sepal length (cm)"], bins=15, color="skyblue", edgecolor="black")
plt.title("Histogram of Sepal Length")
plt.xlabel("Sepal Length (cm)")
plt.ylabel("Frequency")
plt.show()

# 4. Scatter plot
plt.figure(figsize=(6,4))
sns.scatterplot(x="sepal length (cm)", y="petal length (cm)", hue="species", data=df)
plt.title("Scatter Plot: Sepal Length vs Petal Length")
plt.xlabel("Sepal Length (cm)")
plt.ylabel("Petal Length (cm)")
plt.legend(title="Species")
plt.show()

print("""
### ✅ Observations:
- Line chart shows variation of sepal and petal length across samples.  
- Bar chart highlights Setosa has the smallest petals, Virginica the largest.  
- Histogram shows most sepal lengths are between 5 and 7 cm.  
- Scatter plot clearly separates Setosa from the other species.  
""")
