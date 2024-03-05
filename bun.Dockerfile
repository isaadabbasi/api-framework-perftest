FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY servers/bun.ts servers/*.json .

EXPOSE 3000

CMD ["bun", "run", "bun.ts"]