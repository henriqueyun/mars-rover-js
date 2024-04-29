# Mars Rover Javascript

This is a solution for a proposed challenge that you can look at [CHALLENGE.md](CHALLENGE.md)

## Setting Up

Before running either the entire solution or just the tests you must prepare a Elastich Search simple http service at your machine using Docker Compose. Run at root: 
```sh
docker compose up -d
```

## Running

### Install

Install dependencies running:
```sh
yarn
```

### Scripts

Take a look at the examples below to understand the supported input format of the solution. The input format should look __exactly__ how it is at the examples.

####  Build Your Own Rover Example
The solution receives three kind of parameters:
 |Parameter| Format |Meaning|Example|Rover data|
 |---------|--------|-------|-------|-------------|
 |Plateau/Grid dimensions|\<INTEGER\>, \<INTEGER\>|X limit and Y limit. The upper-right-corner limit.|5,5|No|
 |Rover starting position|\<INTEGER\>,\<INTEGER\>,\<CHARACTER\>|X position, Y position and orientation [where it is pointing to (should be N (North), S (South), W (West) or E (East)
)]|1,1,W|Yes|
 |Rover instructions|\<CHARACTER[]\>|The sequence of instruction that the rover should follow |LMRMLMLMLMR|Yes|

Running at your shell, the parameters should be separated by spaces and look like this:

```sh
yarn rover 8,8 1,2,N LMLMLMLMM
# 8,9 means a 9x9 [since the hardcoded lower-left corner (0, 0) is a valid position]
# 1,2,N is the rover starting position and orientation
# LMLMLMLMM is the instructions to rover where L means left, R means right and M means move
```

##### Rover Data

You can inform multiple __rover data params__ to run two or more rovers in the same execution:

```sh
npm start 8,8 1,2,N LMLMLMLMM 3,3,E MRRMMRMRRM
``````

#### Example 1

Run the example 1 input from [CHALLENGE.md](CHALLENGE.md)

```sh
yarn example1
```

#### Example 2

Run the example 2 input from [CHALLENGE.md](CHALLENGE.md)

```sh
yarn example2
```

#### Examples (both in the same execution)

Run both examples from 
Run the example input from [CHALLENGE.md](CHALLENGE.md) in the same execution

```sh
yarn examples
```

### Checking Stored Log Data

Store the log of the executions was part of the challenge. To check what data has been stored using you browser — after running a pre-made or a custom example — type at the url field: `http://localhost:9200/input-logs` or `http://localhost:9200/output-logs`.

## Tests

The project has basic tests, you can run it by running:

```sh
yarn test
```