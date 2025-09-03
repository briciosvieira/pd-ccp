-- CreateTable
CREATE TABLE "pdcompras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num_pd_venda" TEXT NOT NULL,
    "num_quote" TEXT NOT NULL,
    "num_proposta" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "pdcompras_num_pd_venda_key" ON "pdcompras"("num_pd_venda");

-- CreateIndex
CREATE UNIQUE INDEX "pdcompras_num_quote_key" ON "pdcompras"("num_quote");

-- CreateIndex
CREATE UNIQUE INDEX "pdcompras_num_proposta_key" ON "pdcompras"("num_proposta");
