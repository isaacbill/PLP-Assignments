import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from wordcloud import WordCloud

# --------------------------
# Load Data
# --------------------------
@st.cache_data
def load_data():
    df = pd.read_csv("data/metadata.csv", low_memory=False)
    df['publish_time'] = pd.to_datetime(df['publish_time'], errors='coerce')
    df['year'] = df['publish_time'].dt.year
    df['abstract_word_count'] = df['abstract'].fillna("").apply(lambda x: len(x.split()))
    df['journal'] = df['journal'].fillna("Unknown Journal")
    return df

df = load_data()

# --------------------------
# Streamlit Layout
# --------------------------
st.title("CORD-19 Data Explorer")
st.write("Interactive exploration of COVID-19 research metadata")

# Year filter
min_year, max_year = int(df['year'].min()), int(df['year'].max())
year_range = st.slider("Select publication year range",
                       min_year, max_year, (2020, 2021))
filtered = df[(df['year'] >= year_range[0]) & (df['year'] <= year_range[1])]

# Publications by year
st.subheader("Publications Over Time")
year_counts = filtered['year'].value_counts().sort_index()
fig, ax = plt.subplots()
ax.bar(year_counts.index, year_counts.values)
ax.set_xlabel("Year")
ax.set_ylabel("Number of Publications")
st.pyplot(fig)

# Top journals
st.subheader("Top Journals")
top_journals = filtered['journal'].value_counts().head(10)
fig, ax = plt.subplots()
sns.barplot(y=top_journals.index, x=top_journals.values, ax=ax)
ax.set_xlabel("Count")
ax.set_ylabel("Journal")
st.pyplot(fig)

# Word cloud
st.subheader("Word Cloud of Paper Titles")
text = " ".join(filtered['title'].dropna().tolist())
wordcloud = WordCloud(width=800, height=400, background_color="white").generate(text)
fig, ax = plt.subplots(figsize=(10,5))
ax.imshow(wordcloud, interpolation="bilinear")
ax.axis("off")
st.pyplot(fig)

# Data sample
st.subheader("Sample of the Data")
st.dataframe(filtered[['title','authors','journal','year']].head(10))
