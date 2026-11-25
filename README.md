
# SeriesHub

SeriesHub is a React application for displaying and managing
a TV series catalog. Users can save series, view seasons and
episodes, vote for episodes, filter running series, and sort
series by their starting year.

## Installation and Running

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Questions and Answers

### 1. Why did the screen not update in Bug #3, and what does useState do differently?

The votes variable was a regular JavaScript variable.
Changing its value did not cause React to re-render
the component.
Using useState allows React to store the component's state
and update the displayed value when setVotes is called.

### 2. Which key did I choose in SeriesList, and why should the array index not be used?

I used the unique ID of each series as its key.
The ID remains constant even when the list is filtered
or sorted.
Using the array index as a key may cause React to associate
the component's state with the wrong series when the order
of the list changes.

### 3. Why did I sort a copy of the array in Part C3?

The sort() method modifies the original array.
I created a copy using the spread operator to preserve
the original data.
If I had sorted the original series array directly,
the original order would have been lost when turning
off the sorting option.
