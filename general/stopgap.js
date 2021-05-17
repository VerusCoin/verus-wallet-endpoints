const servers = {
  ["dion"]: "dion.kmd",
  ["ptx"]: "ptx.kmd",
  ["zilla"]: "zilla.kmd",
  ["prlpay"]: "prlpay.kmd",
  ["koin"]: "koin.kmd",
  ["pgt"]: "pgt.kmd",
  ["kv"]: "kv.kmd",
  ["bntn"]: "bntn.kmd",
  ["eql"]: "eql.kmd",
  ["oot"]: "oot.kmd",
  ["coqui"]: "coqui.kmd",
  ["chain"]: "chain.kmd",
  ["kmdice"]: "kmdice.kmd",
  ["glxt"]: "glxt.kmd",
  ["revs"]: "revs.kmd",
  ["supernet"]: "supernet.kmd",
  ["dex"]: "dex.kmd",
  ["bots"]: "bots.kmd",
  ["crypto"]: "crypto.kmd",
  ["hodl"]: "hodl.kmd",
  ["iln"]: "iln.kmd",
  ["pangea"]: "pangea.kmd",
  ["bet"]: "bet.kmd",
  ["mshark"]: "mshark.kmd",
  ["wlc"]: "wlc.kmd",
  ["mgw"]: "mgw.kmd",
  ["beer"]: "beer.kmd",
  ["pizza"]: "pizza.kmd",
  ["ninja"]: "ninja.kmd",
  ["jumblr"]: "jumblr.kmd",
  ["kmd"]: ".kmd",
  ["doge"]: ".doge",
  ["via"]: ".via",
  ["vtc"]: ".vtc",
  ["nmc"]: ".nmc",
  ["mona"]: ".mona",
  ["ltc"]: ".ltc",
  ["fair"]: ".fair",
  ["dgb"]: ".dgb",
  ["dash"]: ".dash",
  ["crw"]: ".crw",
  ["btc"]: ".btc",
  ["btg"]: ".btg",
  ["blk"]: ".blk",
  ["sib"]: ".sib",
  ["bch"]: ".bch",
  ["chips"]: "chips.kmd",
  ["zec"]: ".zec",
  ["sng"]: ".sng",
  ["xmy"]: ".xmy",
  ["zcl"]: ".zcl",
  ["hodlc"]: ".hodlc",
  ["suqa"]: ".suqa",
  ["btx"]: ".btx",
  ["btcz"]: ".btcz",
  ["grs"]: ".grs",
  ["qtum"]: ".qtum",
  ["btcp"]: ".btcp",
  ["emc2"]: ".emc2",
  ["game"]: ".game",
  ["fjc"]: ".fjc",
  ["ftc"]: ".ftc",
  ["mnx"]: ".mnx",
  ["ccl"]: "ccl.kmd",
  ["vrsc"]: ".vrsc",
  ["polis"]: ".polis",
  ["xzc"]: ".xzc",
  ["mgnx"]: "mgnx.kmd",
  ["ksb"]: "ksb.kmd",
  ["our"]: "our.kmd",
  ["rick"]: "rick.kmd",
  ["morty"]: "morty.kmd",
  ["zexo"]: "zexo.kmd",
  ["labs"]: "labs.kmd",
  ["dp"]: "dp.kmd",
  ["wlc21"]: "wlc21.kmd",
};

// This is meant to serve as a stopgap for 
// systems that rely on using a ticker alone to identify a coin.
// DO NOT USE THIS WHEN WRITING NEW CODE, IT WILL BE DEPRECATED
const assumeCurrencyId = function (ticker) {
  const tickerLc = ticker.toLowerCase()
  if (idMap[tickerLc]) {
    return idMap[tickerLc]
  } else {
    return tickerLc
  }
}

module.exports = {
  assumeCurrencyId
}