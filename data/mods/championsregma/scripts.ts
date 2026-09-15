export const Scripts: ModdedBattleScriptsData = {
	// Restored from upstream 812501ede^ (the last commit before Reg M-C deleted this mod), so it
	// keeps upstream's Aug-Sep M-A fixes (Spicy Spray, Dire Claw, Disguise, White Herb, ...).
	// When M-C shipped, upstream moved M-B's data into `championsregmb` and made `champions` the
	// M-C dex. These overrides were written against the M-B base, so inherit `championsregmb`:
	// inheriting `champions` would silently give M-A the M-C move-PP and learnset changes.
	// (vgc_solver, 2026-09-15)
	inherit: 'championsregmb',
	gen: 9,
};
