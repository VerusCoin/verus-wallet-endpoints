const servers = {
  ["dion.kmd"]: [
    "electrum1.cipig.net:10030:tcp",
    "electrum2.cipig.net:10030:tcp",
    "electrum3.cipig.net:10030:tcp",
  ],
  ["ptx.kmd"]: [
    "electrum1.patenttx.com:18081:tcp",
    "electrum2.patenttx.com:18081:tcp",
  ],
  ["zilla.kmd"]: [
    "electrum1.cipig.net:10028:tcp",
    "electrum2.cipig.net:10028:tcp",
  ],
  ["prlpay.kmd"]: [
    "electrum1.prlpay.com:9681:tcp",
    "electrum2.prlpay.com:9681:tcp",
  ],
  ["koin.kmd"]: [
    "dalian.koinon.cloud:50001:tcp",
    "sumba.koinon.cloud:50001:tcp",
  ],
  ["pgt.kmd"]: [
    "agama.komodo.build:10002:tcp",
    "agama2.komodo.build:10002:tcp",
  ],
  ["kv.kmd"]: [
    "electrum1.cipig.net:10016:tcp",
    "electrum2.cipig.net:10016:tcp",
  ],
  ["bntn.kmd"]: [
    "electrum1.cipig.net:10026:tcp",
    "electrum2.cipig.net:10026:tcp",
  ],
  ["eql.kmd"]: ["159.65.91.235:10801:tcp", "167.99.204.42:10801:tcp"],
  ["oot.kmd"]: ["electrum1.utrum.io:10088:tcp", "electrum2.utrum.io:10088:tcp"],
  ["coqui.kmd"]: [
    "electrum1.cipig.net:10011:tcp",
    "electrum2.cipig.net:10011:tcp",
  ],
  ["chain.kmd"]: [
    "electrum1.cipig.net:10032:tcp",
    "electrum2.cipig.net:10032:tcp",
    "electrum3.cipig.net:10032:tcp",
  ],
  ["kmdice.kmd"]: [
    "electrum1.cipig.net:10031:tcp",
    "electrum2.cipig.net:10031:tcp",
    "electrum3.cipig.net:10031:tcp",
  ],
  ["glxt.kmd"]: ["electrum1.glx.co:60012:tcp", "electrum2.glx.co:60012:tcp"],
  ["revs.kmd"]: [
    "electrum1.cipig.net:10003:tcp",
    "electrum2.cipig.net:10003:tcp",
  ],
  ["supernet.kmd"]: [
    "electrum1.cipig.net:10005:tcp",
    "electrum2.cipig.net:10005:tcp",
  ],
  ["dex.kmd"]: [
    "electrum1.cipig.net:10006:tcp",
    "electrum2.cipig.net:10006:tcp",
  ],
  ["bots.kmd"]: [
    "electrum1.cipig.net:10007:tcp",
    "electrum2.cipig.net:10007:tcp",
  ],
  ["crypto.kmd"]: [
    "electrum1.cipig.net:10008:tcp",
    "electrum2.cipig.net:10008:tcp",
  ],
  ["hodl.kmd"]: [
    "electrum1.cipig.net:10009:tcp",
    "electrum2.cipig.net:10009:tcp",
  ],
  ["iln.kmd"]: ["electrum1.ilien.io:65011:tcp", "electrum2.ilien.io:65011:tcp"],
  ["pangea.kmd"]: [
    "electrum1.cipig.net:10010:tcp",
    "electrum2.cipig.net:10010:tcp",
  ],
  ["bet.kmd"]: [
    "electrum1.cipig.net:10012:tcp",
    "electrum2.cipig.net:10012:tcp",
  ],
  ["mshark.kmd"]: [
    "electrum1.cipig.net:10013:tcp",
    "electrum2.cipig.net:10013:tcp",
  ],
  ["wlc.kmd"]: [
    "electrum1.cipig.net:10014:tcp",
    "electrum2.cipig.net:10014:tcp",
  ],
  ["mgw.kmd"]: [
    "electrum1.cipig.net:10015:tcp",
    "electrum2.cipig.net:10015:tcp",
  ],
  ["beer.kmd"]: [
    "electrum1.cipig.net:10022:tcp",
    "electrum2.cipig.net:10022:tcp",
  ],
  ["pizza.kmd"]: [
    "electrum1.cipig.net:10024:tcp",
    "electrum2.cipig.net:10024:tcp",
  ],
  ["ninja.kmd"]: [
    "electrum1.fund.ninja:50001:tcp",
    "electrum2.fund.ninja:50001:tcp",
  ],
  ["jumblr.kmd"]: [
    "electrum1.cipig.net:10004:tcp",
    "electrum2.cipig.net:10004:tcp",
  ],
  [".kmd"]: ["electrum1.cipig.net:10001:tcp", "electrum2.cipig.net:10001:tcp"],
  [".doge"]: ["electrum1.cipig.net:10060:tcp", "electrum2.cipig.net:10060:tcp"],
  [".via"]: [
    "viax1.bitops.me:50001:tcp",
    "viax2.bitops.me:50001:tcp",
    "viax3.bitops.me:50001:tcp",
    "server.vialectrum.org:50001:tcp",
    "server2.vialectrum.org:50001:tcp",
  ],
  [".vtc"]: ["fr1.vtconline.org:55001:tcp", "uk1.vtconline.org:55001:tcp"],
  [".nmc"]: ["electrum1.cipig.net:10066:tcp", "electrum2.cipig.net:10066:tcp"],
  [".mona"]: [
    "electrumx1.monacoin.nl:50001:tcp",
    "electrumx2.monacoin.nl:50001:tcp",
    "electrumx1.monacoin.ninja:50001:tcp",
    "electrumx2.monacoin.ninja:50001:tcp",
  ],
  [".ltc"]: [
    "electrum-ltc.bysh.me:50001:tcp",
    "node.ispol.sk:50003:tcp",
    "ltc01.knas.systems:50003:tcp",
    "ltc.rentonisk.com:50002:ssl",
    "electrum.ltc.xurious.com:50001:tcp",
    "backup.electrum-ltc.org:50001:tcp",
  ],
  [".fair"]: ["electrum1.cipig.net:10063:tcp", "electrum2.cipig.net:10063:tcp"],
  [".dgb"]: ["electrum1.cipig.net:10059:tcp", "electrum2.cipig.net:10059:tcp"],
  [".dash"]: ["electrum1.cipig.net:10061:tcp", "electrum2.cipig.net:10061:tcp"],
  [".crw"]: [
    "sgp-crwseed.crowndns.info:50001:tcp",
    "blr-crwseed.crowndns.info:50001:tcp",
    "sfo-crwseed.crowndns.info:50001:tcp",
    "nyc-crwseed.crowndns.info:50001:tcp",
    "ams-crwseed.crowndns.info:50001:tcp",
    "tor-crwseed.crowndns.info:50001:tcp",
    "lon-crwseed.crowndns.info:50001:tcp",
    "fra-crwseed.crowndns.info:50001:tcp",
  ],
  [".btc"]: [
    "electrum1.cipig.net:10000:tcp",
    "electrum2.cipig.net:10000:tcp",
    "electrum3.cipig.net:10000:tcp",
  ],
  [".btg"]: [
    "electrumx-eu.bitcoingold.org:50001:tcp",
    "electrumx-us.bitcoingold.org:50001:tcp",
  ],
  [".blk"]: [
    "electrum1.cipig.net:10054:tcp",
    "electrum2.cipig.net:10054:tcp",
    "electrum3.cipig.net:10054:tcp",
  ],
  [".sib"]: ["electrum1.cipig.net:10050:tcp", "electrum2.cipig.net:10050:tcp"],
  [".bch"]: [
    "bch.imaginary.cash:50001:tcp",
    "wallet.satoshiscoffeehouse.com:50001:tcp",
  ],
  ["chips.kmd"]: [
    "electrum1.cipig.net:10053:tcp",
    "electrum2.cipig.net:10053:tcp",
  ],
  [".zec"]: ["electrum1.cipig.net:10058:tcp", "electrum2.cipig.net:10058:tcp"],
  [".sng"]: [
    "electrumsvr.snowgem.org:50001:tcp",
    "electrumsvr2.snowgem.org:50001:tcp",
    "electrumsvr.snowgem.org:50002:ssl",
    "electrumsvr2.snowgem.org:50002:ssl",
  ],
  [".xmy"]: ["cetus.cryptap.us:50004:ssl", "kraken.cryptap.us:50004:ssl"],
  [".zcl"]: ["electrum1.cipig.net:10055:tcp", "electrum2.cipig.net:10055:tcp"],
  [".hodlc"]: ["hodl.amit.systems:17989:tcp", "hodl2.amit.systems:17898:tcp"],
  [".suqa"]: ["electrum1.suqa.org:12159:tcp", "electrum2.suqa.org:12159:tcp"],
  [".btx"]: ["ele1.bitcore.cc:50001:tcp", "ele2.bitcore.cc:50001:tcp"],
  [".btcz"]: ["electrum1.cipig.net:10056:tcp", "electrum2.cipig.net:10056:tcp"],
  [".grs"]: [
    "electrum1.groestlcoin.org:50002:ssl",
    "electrum2.groestlcoin.org:50002:ssl",
    "electrum6.groestlcoin.org:50002:ssl",
    "electrum7.groestlcoin.org:50002:ssl",
    "electrum8.groestlcoin.org:50002:ssl",
    "electrum9.groestlcoin.org:50002:ssl",
    "electrum10.groestlcoin.org:50002:ssl",
  ],
  [".qtum"]: ["s1.qtum.info:50001:tcp", "s2.qtum.info:50001:tcp"],
  [".btcp"]: [
    "electrum.btcprivate.org:5222:tcp",
    "electrum2.btcprivate.org:5222:tcp",
  ],
  [".emc2"]: ["electrum1.cipig.net:10062:tcp", "electrum2.cipig.net:10062:tcp"],
  [".game"]: ["electrum1.cipig.net:10072:tcp", "electrum2.cipig.net:10072:tcp"],
  [".fjc"]: [
    "electrumx1.fujicoin.org:50001:tcp",
    "electrumx2.fujicoin.org:50001:tcp",
    "electrumx3.fujicoin.org:50001:tcp",
    "electrumx1.fujicoin.org:50002:ssl",
    "electrumx2.fujicoin.org:50002:ssl",
    "electrumx3.fujicoin.org:50002:ssl",
  ],
  [".ftc"]: [
    "electrumx-ch-1.feathercoin.ch:50001:tcp",
    "electrumx-de-2.feathercoin.ch:50001:tcp",
    "electrumx-gb-1.feathercoin.network:50001:tcp",
    "electrumx-gb-2.feathercoin.network:50001:tcp",
  ],
  [".mnx"]: [
    "electrum1.cipig.net:10079:tcp",
    "electrum2.cipig.net:10079:tcp",
    "electrum3.cipig.net:10079:tcp",
  ],
  ["ccl.kmd"]: [
    "electrum1.cipig.net:10029:tcp",
    "electrum2.cipig.net:10029:tcp",
    "electrum3.cipig.net:10029:tcp",
  ],
  [".vrsc"]: [
    "el0.veruscoin.io:17485:tcp",
    "el1.veruscoin.io:17485:tcp",
    "el2.veruscoin.io:17485:tcp",
  ],
  [".polis"]: [
    "electrum1.cipig.net:10075:tcp",
    "electrum2.cipig.net:10075:tcp",
    "electrum3.cipig.net:10075:tcp",
  ],
  [".xzc"]: [
    "electrumx.zcoin.io:50001:tcp",
    "electrumx01.zcoin.io:50001:tcp",
    "electrumx02.zcoin.io:50001:tcp",
    "electrumx03.zcoin.io:50001:tcp",
  ],
  ["mgnx.kmd"]: ["45.76.37.100:50001:tcp", "95.179.177.253:50001:tcp"],
  ["ksb.kmd"]: [
    "51.158.74.137:50001:tcp",
    "electrum.komodochainz.info:50041:tcp",
  ],
  ["our.kmd"]: [
    "51.158.74.137:50002:tcp",
    "electrum.komodochainz.info:50042:tcp",
  ],
  ["rick.kmd"]: [
    "electrum1.cipig.net:10017:tcp",
    "electrum2.cipig.net:10017:tcp",
    "electrum3.cipig.net:10017:tcp",
  ],
  ["morty.kmd"]: [
    "electrum1.cipig.net:10018:tcp",
    "electrum2.cipig.net:10018:tcp",
    "electrum3.cipig.net:10018:tcp",
  ],
  ["zexo.kmd"]: [
    "electrum1.cipig.net:10035:tcp",
    "electrum2.cipig.net:10035:tcp",
    "electrum3.cipig.net:10035:tcp",
  ],
  ["labs.kmd"]: [
    "electrum1.cipig.net:10019:tcp",
    "electrum2.cipig.net:10019:tcp",
    "electrum3.cipig.net:10019:tcp",
  ],
  ["dp.kmd"]: [
    "dp.electrum.komodo.top:50001:tcp",
    "dp.electrum2.komodo.top:50001:tcp",
  ],
  ["wlc21.kmd"]: [
    "electrum1.cipig.net:10014:tcp",
    "electrum2.cipig.net:10014:tcp",
    "electrum3.cipig.net:10014:tcp",
  ],
};

module.exports = servers;
