function load_data() {
	return {
		"file_format_version": "3.2.0",
		"version": "V_ONE",
		"versions": {
			"V_ONE": {
				"name": "1.0.0",
				"skills": {
					"SK_WORK_GROUPS": {
						"x": 0,
						"y": 0,
						"level": "L_TRADITIONAL",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [],
						"slug": "work_groups",
						"is_key": false
					},
					"SK_HELP_AD_HOC": {
						"x": 0,
						"y": 2,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [],
						"obsoletes": [],
						"slug": "help_ad_hoc",
						"is_key": false
					},
					"SK_COWBOY": {
						"x": 0,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [],
						"obsoletes": [],
						"slug": "cowboy",
						"is_key": false
					},
					"SK_QA": {
						"x": 0,
						"y": 6,
						"level": "L_TRADITIONAL",
						"component": "V_CHECK_WORK",
						"requires": [],
						"obsoletes": [],
						"slug": "qa",
						"is_key": false
					},
					"SK_STASIS": {
						"x": 0,
						"y": 7,
						"level": "L_TRADITIONAL",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [],
						"slug": "stasis",
						"is_key": false
					},
					"SK_MANUAL_PACKAGE": {
						"x": 0,
						"y": 8,
						"level": "L_TRADITIONAL",
						"component": "V_SHIP",
						"requires": [],
						"obsoletes": [],
						"slug": "manual_package",
						"is_key": false
					},
					"SK_BUILD_FOR_ME": {
						"x": 0,
						"y": 9,
						"level": "L_TRADITIONAL",
						"component": "V_REQUIREMENTS",
						"requires": [],
						"obsoletes": [],
						"slug": "build_for_me",
						"is_key": false
					},
					"SK_DEATH_MARCH": {
						"x": 0,
						"y": 11,
						"level": "L_TRADITIONAL",
						"component": "V_SUSTAINABLE",
						"requires": [],
						"obsoletes": [],
						"slug": "death_march",
						"is_key": false
					},
					"SK_TEAM_LEADS": {
						"x": 1,
						"y": 2,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_HELP_AD_HOC",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "team_leads",
						"is_key": false
					},
					"SK_BDUF": {
						"x": 1,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [],
						"obsoletes": [
							"SK_COWBOY"
						],
						"slug": "bduf",
						"is_key": false
					},
					"SK_DEV_CHECK": {
						"x": 1,
						"y": 6,
						"level": "L_TRADITIONAL",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_QA",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "dev_check",
						"is_key": false
					},
					"SK_CENTRAL_PROCESS": {
						"x": 1,
						"y": 7,
						"level": "L_TRADITIONAL",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [
							"SK_STASIS"
						],
						"slug": "central_process",
						"is_key": false
					},
					"SK_AUTO_PACKAGE": {
						"x": 1,
						"y": 8,
						"level": "L_TRADITIONAL",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_MANUAL_PACKAGE",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "auto_package",
						"is_key": false
					},
					"SK_REQUIREMENTS": {
						"x": 1,
						"y": 9,
						"level": "L_TRADITIONAL",
						"component": "V_REQUIREMENTS",
						"requires": [],
						"obsoletes": [
							"SK_BUILD_FOR_ME"
						],
						"slug": "requirements",
						"is_key": false
					},
					"SK_WATERFALL_MILESTONES": {
						"x": 1,
						"y": 11,
						"level": "L_TRADITIONAL",
						"component": "V_SUSTAINABLE",
						"requires": [],
						"obsoletes": [
							"SK_DEATH_MARCH"
						],
						"slug": "waterfall_milestones",
						"is_key": false
					},
					"SK_CODE_REVIEW": {
						"x": 2,
						"y": 2,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_HELP_AD_HOC",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEAM_LEADS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "code_review",
						"is_key": false
					},
					"SK_FORMAL_TRAINING": {
						"x": 2,
						"y": 3,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_TEAM_LEADS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "formal_training",
						"is_key": false
					},
					"SK_DESIGN_PATTERNS": {
						"x": 2,
						"y": 4,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_BDUF",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "design_patterns",
						"is_key": false
					},
					"SK_POST_MORTEM": {
						"x": 2,
						"y": 7,
						"level": "L_TRADITIONAL",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_CENTRAL_PROCESS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "post_mortem",
						"is_key": false
					},
					"SK_SLACK": {
						"x": 2,
						"y": 10,
						"level": "L_TRADITIONAL",
						"component": "V_SUSTAINABLE",
						"requires": [],
						"obsoletes": [],
						"slug": "slack",
						"is_key": false
					},
					"SK_PAIR_OCCASIONAL": {
						"x": 3,
						"y": 2,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_CODE_REVIEW",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "pair_occasional",
						"is_key": false
					},
					"SK_CODE_PREVIEW": {
						"x": 3,
						"y": 3,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_CODE_REVIEW",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "code_preview",
						"is_key": false
					},
					"SK_B_ARCHI_UF": {
						"x": 3,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_DESIGN_PATTERNS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "b_archi_uf",
						"is_key": false
					},
					"SK_SMALL_SPECS": {
						"x": 3,
						"y": 9,
						"level": "L_TRADITIONAL",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REQUIREMENTS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "small_specs",
						"is_key": false
					},
					"SK_PREDICTIVE_WITH_SMELLS": {
						"x": 4,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_B_ARCHI_UF",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "predictive_with_smells",
						"is_key": false
					},
					"SK_ITERATED_PREDICTIVE": {
						"x": 5,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_PREDICTIVE_WITH_SMELLS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "iterated_predictive",
						"is_key": false
					},
					"SK_SMALL_BATCHES": {
						"x": 5,
						"y": 9,
						"level": "L_TRADITIONAL",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_SMALL_SPECS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "small_specs",
						"is_key": true
					},
					"SK_TEAMS": {
						"x": 6,
						"y": 0,
						"level": "L_TEAM",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [
							"SK_WORK_GROUPS"
						],
						"slug": "teams",
						"is_key": true
					},
					"SK_VISIBLE_WORK": {
						"x": 7,
						"y": 1,
						"level": "L_TEAM",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SMALL_BATCHES",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "visible_work",
						"is_key": false
					},
					"SK_SIT_TOGETHER": {
						"x": 7,
						"y": 3,
						"level": "L_TEAM",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "sit_together",
						"is_key": false
					},
					"SK_CHARTER": {
						"x": 7,
						"y": 4,
						"level": "L_TEAM",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "charter",
						"is_key": false
					},
					"SK_RETROS": {
						"x": 8,
						"y": 0,
						"level": "L_TEAM",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_CHARTER",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "retros",
						"is_key": false
					},
					"SK_SHARED_CODE": {
						"x": 9,
						"y": 1,
						"level": "L_CORE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_VISIBLE_WORK",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "shared_code",
						"is_key": true
					},
					"SK_SYSTEMS_THINKING": {
						"x": 9,
						"y": 3,
						"level": "L_CORE",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [],
						"slug": "vertical_decomposition",
						"is_key": false
					},
					"SK_LOCAL_REFACTORING": {
						"x": 9,
						"y": 4,
						"level": "L_CORE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "local_refactoring",
						"is_key": true
					},
					"SK_AUTO_DEV_TEST": {
						"x": 9,
						"y": 6,
						"level": "L_CORE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_DEV_CHECK",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_SLACK",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SMALL_SPECS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "auto_dev_test",
						"is_key": false
					},
					"SK_VERT_DECOMP": {
						"x": 9,
						"y": 8,
						"level": "L_CORE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_SMALL_BATCHES",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "vertical_decomposition",
						"is_key": false
					},
					"SK_PULL": {
						"x": 9,
						"y": 12,
						"level": "L_CORE",
						"component": "V_SUSTAINABLE",
						"requires": [],
						"obsoletes": [],
						"slug": "pull",
						"is_key": false
					},
					"SK_PAIR_REGULARLY": {
						"x": 10,
						"y": 2,
						"level": "L_CORE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_PAIR_OCCASIONAL",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_SHARED_CODE",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_RETROS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [
							"SK_CODE_REVIEW"
						],
						"slug": "pair_regularly",
						"is_key": false
					},
					"SK_AUTO_BUILD_VERIFY": {
						"x": 10,
						"y": 7,
						"level": "L_CORE",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_DEV_TEST",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_AUTO_PACKAGE",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "auto_build_verify",
						"is_key": false
					},
					"SK_LIMIT_WIP": {
						"x": 10,
						"y": 10,
						"level": "L_CORE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_PULL",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "limit_work_continuous",
						"is_key": false
					},
					"SK_ACTION_RETROS": {
						"x": 11,
						"y": 0,
						"level": "L_CORE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_RETROS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SYSTEMS_THINKING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_LIMIT_WIP",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "improvement_process",
						"is_key": false
					},
					"SK_T_SHAPED": {
						"x": 11,
						"y": 1,
						"level": "L_CORE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_SHARED_CODE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIT_TOGETHER",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "t_shaped",
						"is_key": false
					},
					"SK_DRY": {
						"x": 11,
						"y": 3,
						"level": "L_CORE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_DESIGN_PATTERNS",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_LOCAL_REFACTORING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "dry",
						"is_key": false
					},
					"SK_READ_BY_REFACTORING": {
						"x": 11,
						"y": 4,
						"level": "L_CORE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_LOCAL_REFACTORING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "read_by_refactoring",
						"is_key": true
					},
					"SK_TEST_FIRST": {
						"x": 11,
						"y": 6,
						"level": "L_CORE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_AUTO_DEV_TEST",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "test_first",
						"is_key": false
					},
					"SK_COLLECTIVE_OWNERSHIP": {
						"x": 12,
						"y": 1,
						"level": "L_ADAPTIVE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_T_SHAPED",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "collective_ownership",
						"is_key": false
					},
					"SK_WRITE_UNITS": {
						"x": 12,
						"y": 4,
						"level": "L_ADAPTIVE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_READ_BY_REFACTORING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "write_units",
						"is_key": false
					},
					"SK_DONE_DEFINITION": {
						"x": 12,
						"y": 5,
						"level": "L_ADAPTIVE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_SHARED_CODE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SMALL_SPECS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "done_definition",
						"is_key": false
					},
					"SK_AUTO_DEPLOY": {
						"x": 12,
						"y": 7,
						"level": "L_ADAPTIVE",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_BUILD_VERIFY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "auto_deploy",
						"is_key": false
					},
					"SK_LEARN_LOCALLY": {
						"x": 13,
						"y": 0,
						"level": "L_ADAPTIVE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "learn_locally",
						"is_key": false
					},
					"SK_PAIR_PRODUCTION": {
						"x": 13,
						"y": 2,
						"level": "L_ADAPTIVE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_COLLECTIVE_OWNERSHIP",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIT_TOGETHER",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "pair_production",
						"is_key": false
					},
					"SK_ITERATION": {
						"x": 13,
						"y": 11,
						"level": "L_ADAPTIVE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_WATERFALL_MILESTONES",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "iteration",
						"is_key": false
					},
					"SK_PAIR_ALWAYS": {
						"x": 14,
						"y": 2,
						"level": "L_ADAPTIVE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_PAIR_PRODUCTION",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "pair_always",
						"is_key": true
					},
					"SK_TEST_UNITS": {
						"x": 14,
						"y": 6,
						"level": "L_ADAPTIVE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_AUTO_DEV_TEST",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_WRITE_UNITS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_PRODUCTION",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "test_units",
						"is_key": true
					},
					"SK_STORIES": {
						"x": 14,
						"y": 8,
						"level": "L_ADAPTIVE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_SMALL_BATCHES",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_VERT_DECOMP",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "stories",
						"is_key": false
					},
					"SK_BUG_FREE_NEW_CODE": {
						"x": 15,
						"y": 1,
						"level": "L_ADAPTIVE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "bug_free_new_code",
						"is_key": true
					},
					"SK_REFLECTIVE_DESIGN": {
						"x": 15,
						"y": 3,
						"level": "L_ADAPTIVE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_DRY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_READ_BY_REFACTORING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "reflective_design",
						"is_key": false
					},
					"SK_FAST_BUILD_VERIFY": {
						"x": 15,
						"y": 6,
						"level": "L_ADAPTIVE",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_BUILD_VERIFY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "fast_build_verify",
						"is_key": false
					},
					"SK_TRACK_CAPACITY": {
						"x": 15,
						"y": 10,
						"level": "L_ADAPTIVE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_ITERATION",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_STORIES",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "track_capacity",
						"is_key": false
					},
					"SK_LEARN_ALL": {
						"x": 16,
						"y": 0,
						"level": "L_LEVERAGE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_LEARN_LOCALLY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "learn_all",
						"is_key": false
					},
					"SK_PROCESS_EXPERIMENTS": {
						"x": 16,
						"y": 1,
						"level": "L_LEVERAGE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_LEARN_LOCALLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "process_experiments",
						"is_key": false
					},
					"SK_LEARN_VS_PROVE": {
						"x": 16,
						"y": 3,
						"level": "L_LEVERAGE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_DONE_DEFINITION",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_AUTO_DEV_TEST",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "learn_vs_prove",
						"is_key": false
					},
					"SK_TEST_BEYOND_CORRECT": {
						"x": 16,
						"y": 5,
						"level": "L_LEVERAGE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_DONE_DEFINITION",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "test_beyond_correct",
						"is_key": false
					},
					"SK_FAST_AUTO_DEPLOY": {
						"x": 16,
						"y": 7,
						"level": "L_LEVERAGE",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_DEPLOY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_FAST_BUILD_VERIFY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "fast_auto_deploy",
						"is_key": false
					},
					"SK_STORY_CLUSTERING": {
						"x": 16,
						"y": 8,
						"level": "L_LEVERAGE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORIES",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "story_clustering",
						"is_key": false
					},
					"SK_ADAPTIVE_PLANNING": {
						"x": 16,
						"y": 9,
						"level": "L_LEVERAGE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_SMALL_BATCHES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ITERATION",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_STORIES",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "adaptive_planning",
						"is_key": false
					},
					"SK_RELATIVE_ESTIMATES": {
						"x": 16,
						"y": 10,
						"level": "L_LEVERAGE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_TRACK_CAPACITY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "relative_estimates",
						"is_key": false
					},
					"SK_LIMIT_WORK_TO_CAPACITY": {
						"x": 16,
						"y": 11,
						"level": "L_LEVERAGE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_TRACK_CAPACITY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ITERATION",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "limit_work_to_capacity",
						"is_key": false
					},
					"SK_CONTINUOUS_PLAN": {
						"x": 16,
						"y": 12,
						"level": "L_LEVERAGE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_PULL",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "continuous_plan",
						"is_key": false
					},
					"SK_SESSION_MANUAL_TESTING": {
						"x": 17,
						"y": 3,
						"level": "L_LEVERAGE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_LEARN_VS_PROVE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_AUTO_BUILD_VERIFY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "session_manual_testing",
						"is_key": false
					},
					"SK_ROLLING_WAVE_PLANNING": {
						"x": 17,
						"y": 9,
						"level": "L_LEVERAGE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORY_CLUSTERING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ADAPTIVE_PLANNING",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "rolling_wave_planning",
						"is_key": false
					},
					"SK_BUG_RATCHET": {
						"x": 18,
						"y": 2,
						"level": "L_NO_DEBT",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_BUG_FREE_NEW_CODE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REFLECTIVE_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SESSION_MANUAL_TESTING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_BEYOND_CORRECT",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "bug_ratchet",
						"is_key": false
					},
					"SK_IMPROVING_PROOF": {
						"x": 18,
						"y": 3,
						"level": "L_NO_DEBT",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_SESSION_MANUAL_TESTING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_BEYOND_CORRECT",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "improving_proof",
						"is_key": false
					},
					"SK_TEST_LEGACY": {
						"x": 18,
						"y": 4,
						"level": "L_NO_DEBT",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "test_legacy",
						"is_key": false
					},
					"SK_RGR": {
						"x": 18,
						"y": 5,
						"level": "L_NO_DEBT",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REFLECTIVE_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "rgr",
						"is_key": false
					},
					"SK_AUTO_DEPLOY_VERIFY": {
						"x": 18,
						"y": 6,
						"level": "L_NO_DEBT",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_DEPLOY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_FAST_AUTO_DEPLOY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "auto_deploy_verify",
						"is_key": false
					},
					"SK_VERIFY_EXAMPLES": {
						"x": 18,
						"y": 7,
						"level": "L_NO_DEBT",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORIES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "verify_examples",
						"is_key": false
					},
					"SK_DATA_DRIVEN_CAPACITY": {
						"x": 18,
						"y": 11,
						"level": "L_NO_DEBT",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_RELATIVE_ESTIMATES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_LIMIT_WORK_TO_CAPACITY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "data_driven_capacity",
						"is_key": false
					},
					"SK_FIX_LEGACY": {
						"x": 19,
						"y": 4,
						"level": "L_NO_DEBT",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_TEST_LEGACY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_BUG_RATCHET",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_RGR",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REFLECTIVE_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_COLLECTIVE_OWNERSHIP",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_IMPROVING_PROOF",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "fix_legacy",
						"is_key": true
					},
					"SK_SIMUL_PHASES": {
						"x": 19,
						"y": 5,
						"level": "L_NO_DEBT",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_RGR",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_FAST_AUTO_DEPLOY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ADAPTIVE_PLANNING",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "simul_phases",
						"is_key": true
					},
					"SK_CLEAN_CODE": {
						"x": 20,
						"y": 3,
						"level": "L_NO_DEBT",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_FIX_LEGACY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "clean_code",
						"is_key": false
					},
					"SK_INTENTIONAL_TECHNICAL_DEBT": {
						"x": 20,
						"y": 9,
						"level": "L_NO_DEBT",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_FIX_LEGACY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "intentional_technical_debt",
						"is_key": false
					},
					"SK_SHORT_TERM_RELIABILITY": {
						"x": 20,
						"y": 11,
						"level": "L_NO_DEBT",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_DATA_DRIVEN_CAPACITY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ADAPTIVE_PLANNING",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "reliability",
						"is_key": false
					},
					"SK_M_SHAPED": {
						"x": 21,
						"y": 1,
						"level": "L_AWESOME",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "m_shaped",
						"is_key": false
					},
					"SK_EVO_DESIGN": {
						"x": 21,
						"y": 4,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_CLEAN_CODE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REFLECTIVE_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "evo_design",
						"is_key": false
					},
					"SK_FEATURE_ISOLATION": {
						"x": 21,
						"y": 5,
						"level": "L_AWESOME",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_FAST_AUTO_DEPLOY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "feature_isolation",
						"is_key": false
					},
					"SK_AUTO_ROLLBACK": {
						"x": 21,
						"y": 6,
						"level": "L_AWESOME",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_DEPLOY_VERIFY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "auto_rollback",
						"is_key": true
					},
					"SK_HYPOTHESIS_STORIES": {
						"x": 21,
						"y": 7,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORY_CLUSTERING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_INTENTIONAL_TECHNICAL_DEBT",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "hypothesis_stories",
						"is_key": true
					},
					"SK_EXPERIENCE_FOCUS": {
						"x": 21,
						"y": 8,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORY_CLUSTERING",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "experience_focus",
						"is_key": false
					},
					"SK_PROJECTIONS": {
						"x": 21,
						"y": 10,
						"level": "L_AWESOME",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_ROLLING_WAVE_PLANNING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SHORT_TERM_RELIABILITY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "projections",
						"is_key": false
					},
					"SK_UNIVERSAL_SPECIALIST": {
						"x": 22,
						"y": 2,
						"level": "L_AWESOME",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_M_SHAPED",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "universal_specialist",
						"is_key": false
					},
					"SK_NO_BUGS": {
						"x": 22,
						"y": 3,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_EVO_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_BUG_RATCHET",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "bugs_zero",
						"is_key": true
					},
					"SK_TELL_VS_ASK": {
						"x": 22,
						"y": 5,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_EVO_DESIGN",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "tell_vs_ask",
						"is_key": false
					},
					"SK_WHOLE_TEAM_BUSINESS": {
						"x": 22,
						"y": 8,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_EXPERIENCE_FOCUS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_M_SHAPED",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "whole_team_business",
						"is_key": false
					},
					"SK_SMOOTH_FLOW": {
						"x": 22,
						"y": 9,
						"level": "L_AWESOME",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_CONTINUOUS_PLAN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PROJECTIONS",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "smooth_flow",
						"is_key": false
					},
					"SK_YAGNI": {
						"x": 23,
						"y": 3,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_NO_BUGS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "yagni",
						"is_key": false
					},
					"SK_CONT_SHIP": {
						"x": 23,
						"y": 6,
						"level": "L_AWESOME",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_NO_BUGS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_FEATURE_ISOLATION",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "cont_ship",
						"is_key": false
					},
					"SK_TIP": {
						"x": 23,
						"y": 7,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_HYPOTHESIS_STORIES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_NO_BUGS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "tip",
						"is_key": false
					},
					"SK_SINGLE_PIECE_FLOW": {
						"x": 23,
						"y": 9,
						"level": "L_AWESOME",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_SMOOTH_FLOW",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "single_piece_flow",
						"is_key": false
					},
					"SK_PROCESS_INNOVATION": {
						"x": 24,
						"y": 0,
						"level": "L_AWESOME",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_PROCESS_EXPERIMENTS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_LEARN_ALL",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "process_innovation",
						"is_key": false
					},
					"SK_RADICAL_COLLABORATE": {
						"x": 24,
						"y": 2,
						"level": "L_AWESOME",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_M_SHAPED",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SINGLE_PIECE_FLOW",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "radical_collaborate",
						"is_key": false
					},
					"SK_TDDESIGN": {
						"x": 24,
						"y": 4,
						"level": "L_AWESOME",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_EVO_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TELL_VS_ASK",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "tddesign",
						"is_key": false
					},
					"SK_CONT_DEPLOY": {
						"x": 24,
						"y": 6,
						"level": "L_AWESOME",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_CONT_SHIP",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_AUTO_ROLLBACK",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TIP",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "cont_deploy",
						"is_key": false
					},
					"SK_METRICS_FOCUS": {
						"x": 24,
						"y": 7,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_EXPERIENCE_FOCUS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TIP",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "metrics_focus",
						"is_key": false
					},
					"SK_LISTEN_TO_CODE": {
						"x": 25,
						"y": 3,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_YAGNI",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TDDESIGN",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "listen_to_code",
						"is_key": false
					},
					"SK_LEAN_STARTUP": {
						"x": 25,
						"y": 8,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_METRICS_FOCUS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_CONT_DEPLOY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_WHOLE_TEAM_BUSINESS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "lean_startup",
						"is_key": true
					}
				},
				"levels": {
					"L_TRADITIONAL": {
						"slug": "traditional",
						"min": -1,
						"max": 5,
						"color": "#cccccc"
					},
					"L_TEAM": {
						"slug": "team",
						"min": 6,
						"max": 8,
						"color": "#dedede"
					},
					"L_CORE": {
						"slug": "modern_core",
						"min": 9,
						"max": 11,
						"color": "#cccccc"
					},
					"L_ADAPTIVE": {
						"slug": "adaptive",
						"min": 12,
						"max": 15,
						"color": "#dedede"
					},
					"L_LEVERAGE": {
						"slug": "leverage",
						"min": 16,
						"max": 17,
						"color": "#cccccc"
					},
					"L_NO_DEBT": {
						"slug": "no_debt",
						"min": 18,
						"max": 20,
						"color": "#dedede"
					},
					"L_AWESOME": {
						"slug": "awesome",
						"min": 21,
						"max": 26,
						"color": "#cccccc"
					}
				},
				"components": {
					"V_CHECK_WORK": {
						"name": "Check your work",
						"techniques": "TDD, Exploratory Testing",
						"color": "cornflowerblue",
						"slug": "test"
					},
					"V_CODE": {
						"name": "Write good code",
						"techniques": "Refactoring, Design, Recovering legacy code",
						"color": "limegreen",
						"slug": "code"
					},
					"V_SHIP": {
						"name": "Ship at will",
						"techniques": "Continuous Integration, Continuous Deployment, Dev Ops",
						"color": "#A825D3",
						"slug": "ship"
					},
					"V_REQUIREMENTS": {
						"name": "Know what to build",
						"techniques": "Stories, Vertical Decomposition, Planning",
						"color": "orange",
						"slug": "plan"
					},
					"V_LEARN": {
						"name": "Discipline and learning",
						"techniques": "Pairing, Mobbing",
						"color": "fuchsia",
						"slug": "learn"
					},
					"V_IMPROVE": {
						"name": "Improve as a team",
						"techniques": "Teams, Retrospectives",
						"color": "#cf4040",
						"slug": "team"
					},
					"V_SUSTAINABLE": {
						"name": "Not hurried",
						"techniques": "Velocity, Planning to Capacity",
						"color": "#bc8f8f",
						"slug": "sustain"
					}
				}
			},
			"V_ZERO": {
				"name": "0.11.3",
				"skills": {
					"SK_WORK_GROUPS": {
						"x": 0,
						"y": 0,
						"level": "L_TRADITIONAL",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [],
						"slug": "work_groups",
						"is_key": false
					},
					"SK_HELP_AD_HOC": {
						"x": 0,
						"y": 2,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [],
						"obsoletes": [],
						"slug": "help_ad_hoc",
						"is_key": false
					},
					"SK_COWBOY": {
						"x": 0,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [],
						"obsoletes": [],
						"slug": "cowboy",
						"is_key": false
					},
					"SK_QA": {
						"x": 0,
						"y": 6,
						"level": "L_TRADITIONAL",
						"component": "V_CHECK_WORK",
						"requires": [],
						"obsoletes": [],
						"slug": "qa",
						"is_key": false
					},
					"SK_STASIS": {
						"x": 0,
						"y": 7,
						"level": "L_TRADITIONAL",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [],
						"slug": "stasis",
						"is_key": false
					},
					"SK_MANUAL_PACKAGE": {
						"x": 0,
						"y": 8,
						"level": "L_TRADITIONAL",
						"component": "V_SHIP",
						"requires": [],
						"obsoletes": [],
						"slug": "manual_package",
						"is_key": false
					},
					"SK_BUILD_FOR_ME": {
						"x": 0,
						"y": 9,
						"level": "L_TRADITIONAL",
						"component": "V_REQUIREMENTS",
						"requires": [],
						"obsoletes": [],
						"slug": "build_for_me",
						"is_key": false
					},
					"SK_DEATH_MARCH": {
						"x": 0,
						"y": 11,
						"level": "L_TRADITIONAL",
						"component": "V_SUSTAINABLE",
						"requires": [],
						"obsoletes": [],
						"slug": "death_march",
						"is_key": false
					},
					"SK_TEAM_LEADS": {
						"x": 1,
						"y": 2,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_HELP_AD_HOC",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "team_leads",
						"is_key": false
					},
					"SK_BDUF": {
						"x": 1,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [],
						"obsoletes": [
							"SK_COWBOY"
						],
						"slug": "bduf",
						"is_key": false
					},
					"SK_DEV_CHECK": {
						"x": 1,
						"y": 6,
						"level": "L_TRADITIONAL",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_QA",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "dev_check",
						"is_key": false
					},
					"SK_CENTRAL_PROCESS": {
						"x": 1,
						"y": 7,
						"level": "L_TRADITIONAL",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [
							"SK_STASIS"
						],
						"slug": "central_process",
						"is_key": false
					},
					"SK_AUTO_PACKAGE": {
						"x": 1,
						"y": 8,
						"level": "L_TRADITIONAL",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_MANUAL_PACKAGE",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "auto_package",
						"is_key": false
					},
					"SK_REQUIREMENTS": {
						"x": 1,
						"y": 9,
						"level": "L_TRADITIONAL",
						"component": "V_REQUIREMENTS",
						"requires": [],
						"obsoletes": [
							"SK_BUILD_FOR_ME"
						],
						"slug": "requirements",
						"is_key": false
					},
					"SK_WATERFALL_MILESTONES": {
						"x": 1,
						"y": 11,
						"level": "L_TRADITIONAL",
						"component": "V_SUSTAINABLE",
						"requires": [],
						"obsoletes": [
							"SK_DEATH_MARCH"
						],
						"slug": "waterfall_milestones",
						"is_key": false
					},
					"SK_CODE_REVIEW": {
						"x": 2,
						"y": 2,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_HELP_AD_HOC",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEAM_LEADS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "code_review",
						"is_key": false
					},
					"SK_FORMAL_TRAINING": {
						"x": 2,
						"y": 3,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_TEAM_LEADS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "formal_training",
						"is_key": false
					},
					"SK_DESIGN_PATTERNS": {
						"x": 2,
						"y": 4,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_BDUF",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "design_patterns",
						"is_key": false
					},
					"SK_POST_MORTEM": {
						"x": 2,
						"y": 7,
						"level": "L_TRADITIONAL",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_CENTRAL_PROCESS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "post_mortem",
						"is_key": false
					},
					"SK_SLACK": {
						"x": 2,
						"y": 10,
						"level": "L_TRADITIONAL",
						"component": "V_SUSTAINABLE",
						"requires": [],
						"obsoletes": [],
						"slug": "slack",
						"is_key": false
					},
					"SK_PAIR_OCCASIONAL": {
						"x": 3,
						"y": 2,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_CODE_REVIEW",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "pair_occasional",
						"is_key": false
					},
					"SK_CODE_PREVIEW": {
						"x": 3,
						"y": 3,
						"level": "L_TRADITIONAL",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_CODE_REVIEW",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "code_preview",
						"is_key": false
					},
					"SK_B_ARCHI_UF": {
						"x": 3,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_DESIGN_PATTERNS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "b_archi_uf",
						"is_key": false
					},
					"SK_SMALL_SPECS": {
						"x": 3,
						"y": 9,
						"level": "L_TRADITIONAL",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REQUIREMENTS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "small_specs",
						"is_key": false
					},
					"SK_PREDICTIVE_WITH_SMELLS": {
						"x": 4,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_B_ARCHI_UF",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "predictive_with_smells",
						"is_key": false
					},
					"SK_ITERATED_PREDICTIVE": {
						"x": 5,
						"y": 5,
						"level": "L_TRADITIONAL",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_PREDICTIVE_WITH_SMELLS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "iterated_predictive",
						"is_key": false
					},
					"SK_SMALL_BATCHES": {
						"x": 5,
						"y": 9,
						"level": "L_TRADITIONAL",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_SMALL_SPECS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "small_specs",
						"is_key": true
					},
					"SK_TEAMS": {
						"x": 6,
						"y": 0,
						"level": "L_TEAM",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [
							"SK_WORK_GROUPS"
						],
						"slug": "teams",
						"is_key": true
					},
					"SK_VISIBLE_WORK": {
						"x": 7,
						"y": 1,
						"level": "L_TEAM",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SMALL_BATCHES",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "visible_work",
						"is_key": false
					},
					"SK_SIT_TOGETHER": {
						"x": 7,
						"y": 3,
						"level": "L_TEAM",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "sit_together",
						"is_key": false
					},
					"SK_CHARTER": {
						"x": 7,
						"y": 4,
						"level": "L_TEAM",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "charter",
						"is_key": false
					},
					"SK_RETROS": {
						"x": 8,
						"y": 0,
						"level": "L_TEAM",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_CHARTER",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "retros",
						"is_key": false
					},
					"SK_SHARED_CODE": {
						"x": 9,
						"y": 1,
						"level": "L_CORE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_TEAMS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_VISIBLE_WORK",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "shared_code",
						"is_key": true
					},
					"SK_SYSTEMS_THINKING": {
						"x": 9,
						"y": 3,
						"level": "L_CORE",
						"component": "V_IMPROVE",
						"requires": [],
						"obsoletes": [],
						"slug": "vertical_decomposition",
						"is_key": false
					},
					"SK_LOCAL_REFACTORING": {
						"x": 9,
						"y": 4,
						"level": "L_CORE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "local_refactoring",
						"is_key": true
					},
					"SK_AUTO_DEV_TEST": {
						"x": 9,
						"y": 6,
						"level": "L_CORE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_DEV_CHECK",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_SLACK",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SMALL_SPECS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "auto_dev_test",
						"is_key": false
					},
					"SK_VERT_DECOMP": {
						"x": 9,
						"y": 8,
						"level": "L_CORE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_SMALL_BATCHES",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "vertical_decomposition",
						"is_key": false
					},
					"SK_PULL": {
						"x": 9,
						"y": 12,
						"level": "L_CORE",
						"component": "V_SUSTAINABLE",
						"requires": [],
						"obsoletes": [],
						"slug": "pull",
						"is_key": false
					},
					"SK_PAIR_REGULARLY": {
						"x": 10,
						"y": 2,
						"level": "L_CORE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_PAIR_OCCASIONAL",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_SHARED_CODE",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_RETROS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [
							"SK_CODE_REVIEW"
						],
						"slug": "pair_regularly",
						"is_key": false
					},
					"SK_AUTO_BUILD_VERIFY": {
						"x": 10,
						"y": 7,
						"level": "L_CORE",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_DEV_TEST",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_AUTO_PACKAGE",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "auto_build_verify",
						"is_key": false
					},
					"SK_LIMIT_WIP": {
						"x": 10,
						"y": 10,
						"level": "L_CORE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_PULL",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "limit_work_continuous",
						"is_key": false
					},
					"SK_ACTION_RETROS": {
						"x": 11,
						"y": 0,
						"level": "L_CORE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_RETROS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SYSTEMS_THINKING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_LIMIT_WIP",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "improvement_process",
						"is_key": false
					},
					"SK_T_SHAPED": {
						"x": 11,
						"y": 1,
						"level": "L_CORE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_SHARED_CODE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIT_TOGETHER",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "t_shaped",
						"is_key": false
					},
					"SK_DRY": {
						"x": 11,
						"y": 3,
						"level": "L_CORE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_DESIGN_PATTERNS",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_LOCAL_REFACTORING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "dry",
						"is_key": false
					},
					"SK_READ_BY_REFACTORING": {
						"x": 11,
						"y": 4,
						"level": "L_CORE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_LOCAL_REFACTORING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "read_by_refactoring",
						"is_key": true
					},
					"SK_TEST_FIRST": {
						"x": 11,
						"y": 6,
						"level": "L_CORE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_AUTO_DEV_TEST",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "test_first",
						"is_key": false
					},
					"SK_COLLECTIVE_OWNERSHIP": {
						"x": 12,
						"y": 1,
						"level": "L_ADAPTIVE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_T_SHAPED",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "collective_ownership",
						"is_key": false
					},
					"SK_WRITE_UNITS": {
						"x": 12,
						"y": 4,
						"level": "L_ADAPTIVE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_READ_BY_REFACTORING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "write_units",
						"is_key": false
					},
					"SK_DONE_DEFINITION": {
						"x": 12,
						"y": 5,
						"level": "L_ADAPTIVE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_SHARED_CODE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SMALL_SPECS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "done_definition",
						"is_key": false
					},
					"SK_AUTO_DEPLOY": {
						"x": 12,
						"y": 7,
						"level": "L_ADAPTIVE",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_BUILD_VERIFY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "auto_deploy",
						"is_key": false
					},
					"SK_LEARN_LOCALLY": {
						"x": 13,
						"y": 0,
						"level": "L_ADAPTIVE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "learn_locally",
						"is_key": false
					},
					"SK_PAIR_PRODUCTION": {
						"x": 13,
						"y": 2,
						"level": "L_ADAPTIVE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_COLLECTIVE_OWNERSHIP",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIT_TOGETHER",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "pair_production",
						"is_key": false
					},
					"SK_ITERATION": {
						"x": 13,
						"y": 11,
						"level": "L_ADAPTIVE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_WATERFALL_MILESTONES",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "iteration",
						"is_key": false
					},
					"SK_PAIR_ALWAYS": {
						"x": 14,
						"y": 2,
						"level": "L_ADAPTIVE",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_PAIR_PRODUCTION",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "pair_always",
						"is_key": true
					},
					"SK_TEST_UNITS": {
						"x": 14,
						"y": 6,
						"level": "L_ADAPTIVE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_AUTO_DEV_TEST",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_WRITE_UNITS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_PRODUCTION",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "test_units",
						"is_key": true
					},
					"SK_STORIES": {
						"x": 14,
						"y": 8,
						"level": "L_ADAPTIVE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_SMALL_BATCHES",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_VERT_DECOMP",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "stories",
						"is_key": false
					},
					"SK_BUG_FREE_NEW_CODE": {
						"x": 15,
						"y": 1,
						"level": "L_ADAPTIVE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "bug_free_new_code",
						"is_key": true
					},
					"SK_REFLECTIVE_DESIGN": {
						"x": 15,
						"y": 3,
						"level": "L_ADAPTIVE",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_DRY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_READ_BY_REFACTORING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_REGULARLY",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "reflective_design",
						"is_key": false
					},
					"SK_FAST_BUILD_VERIFY": {
						"x": 15,
						"y": 6,
						"level": "L_ADAPTIVE",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_BUILD_VERIFY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "fast_build_verify",
						"is_key": false
					},
					"SK_TRACK_CAPACITY": {
						"x": 15,
						"y": 10,
						"level": "L_ADAPTIVE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_ITERATION",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_STORIES",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "track_capacity",
						"is_key": false
					},
					"SK_LEARN_ALL": {
						"x": 16,
						"y": 0,
						"level": "L_LEVERAGE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_LEARN_LOCALLY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "learn_all",
						"is_key": false
					},
					"SK_PROCESS_EXPERIMENTS": {
						"x": 16,
						"y": 1,
						"level": "L_LEVERAGE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_ACTION_RETROS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_LEARN_LOCALLY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "process_experiments",
						"is_key": false
					},
					"SK_LEARN_VS_PROVE": {
						"x": 16,
						"y": 3,
						"level": "L_LEVERAGE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_DONE_DEFINITION",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_AUTO_DEV_TEST",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "learn_vs_prove",
						"is_key": false
					},
					"SK_TEST_BEYOND_CORRECT": {
						"x": 16,
						"y": 5,
						"level": "L_LEVERAGE",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_DONE_DEFINITION",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "test_beyond_correct",
						"is_key": false
					},
					"SK_FAST_AUTO_DEPLOY": {
						"x": 16,
						"y": 7,
						"level": "L_LEVERAGE",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_DEPLOY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_FAST_BUILD_VERIFY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "fast_auto_deploy",
						"is_key": false
					},
					"SK_STORY_CLUSTERING": {
						"x": 16,
						"y": 8,
						"level": "L_LEVERAGE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORIES",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "story_clustering",
						"is_key": false
					},
					"SK_ADAPTIVE_PLANNING": {
						"x": 16,
						"y": 9,
						"level": "L_LEVERAGE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_SMALL_BATCHES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ITERATION",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_STORIES",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "adaptive_planning",
						"is_key": false
					},
					"SK_RELATIVE_ESTIMATES": {
						"x": 16,
						"y": 10,
						"level": "L_LEVERAGE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_TRACK_CAPACITY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "relative_estimates",
						"is_key": false
					},
					"SK_LIMIT_WORK_TO_CAPACITY": {
						"x": 16,
						"y": 11,
						"level": "L_LEVERAGE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_SLACK",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_TRACK_CAPACITY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ITERATION",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "limit_work_to_capacity",
						"is_key": false
					},
					"SK_CONTINUOUS_PLAN": {
						"x": 16,
						"y": 12,
						"level": "L_LEVERAGE",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_PULL",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "continuous_plan",
						"is_key": false
					},
					"SK_SESSION_MANUAL_TESTING": {
						"x": 17,
						"y": 3,
						"level": "L_LEVERAGE",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_LEARN_VS_PROVE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_AUTO_BUILD_VERIFY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "session_manual_testing",
						"is_key": false
					},
					"SK_ROLLING_WAVE_PLANNING": {
						"x": 17,
						"y": 9,
						"level": "L_LEVERAGE",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORY_CLUSTERING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ADAPTIVE_PLANNING",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "rolling_wave_planning",
						"is_key": false
					},
					"SK_BUG_RATCHET": {
						"x": 18,
						"y": 2,
						"level": "L_NO_DEBT",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_BUG_FREE_NEW_CODE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REFLECTIVE_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SESSION_MANUAL_TESTING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_BEYOND_CORRECT",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "bug_ratchet",
						"is_key": false
					},
					"SK_IMPROVING_PROOF": {
						"x": 18,
						"y": 3,
						"level": "L_NO_DEBT",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_SESSION_MANUAL_TESTING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_BEYOND_CORRECT",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "improving_proof",
						"is_key": false
					},
					"SK_TEST_LEGACY": {
						"x": 18,
						"y": 4,
						"level": "L_NO_DEBT",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "test_legacy",
						"is_key": false
					},
					"SK_RGR": {
						"x": 18,
						"y": 5,
						"level": "L_NO_DEBT",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_UNITS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REFLECTIVE_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "rgr",
						"is_key": false
					},
					"SK_AUTO_DEPLOY_VERIFY": {
						"x": 18,
						"y": 6,
						"level": "L_NO_DEBT",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_DEPLOY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_FAST_AUTO_DEPLOY",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "auto_deploy_verify",
						"is_key": false
					},
					"SK_VERIFY_EXAMPLES": {
						"x": 18,
						"y": 7,
						"level": "L_NO_DEBT",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORIES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TEST_FIRST",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "verify_examples",
						"is_key": false
					},
					"SK_DATA_DRIVEN_CAPACITY": {
						"x": 18,
						"y": 11,
						"level": "L_NO_DEBT",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_RELATIVE_ESTIMATES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_LIMIT_WORK_TO_CAPACITY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "data_driven_capacity",
						"is_key": false
					},
					"SK_FIX_LEGACY": {
						"x": 19,
						"y": 4,
						"level": "L_NO_DEBT",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_TEST_LEGACY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_BUG_RATCHET",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_RGR",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REFLECTIVE_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_COLLECTIVE_OWNERSHIP",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_IMPROVING_PROOF",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "fix_legacy",
						"is_key": true
					},
					"SK_SIMUL_PHASES": {
						"x": 19,
						"y": 5,
						"level": "L_NO_DEBT",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_RGR",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_FAST_AUTO_DEPLOY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ADAPTIVE_PLANNING",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "simul_phases",
						"is_key": true
					},
					"SK_CLEAN_CODE": {
						"x": 20,
						"y": 3,
						"level": "L_NO_DEBT",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_FIX_LEGACY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "clean_code",
						"is_key": false
					},
					"SK_INTENTIONAL_TECHNICAL_DEBT": {
						"x": 20,
						"y": 9,
						"level": "L_NO_DEBT",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_FIX_LEGACY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "intentional_technical_debt",
						"is_key": false
					},
					"SK_SHORT_TERM_RELIABILITY": {
						"x": 20,
						"y": 11,
						"level": "L_NO_DEBT",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_DATA_DRIVEN_CAPACITY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_ADAPTIVE_PLANNING",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "reliability",
						"is_key": false
					},
					"SK_M_SHAPED": {
						"x": 21,
						"y": 1,
						"level": "L_AWESOME",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "m_shaped",
						"is_key": false
					},
					"SK_EVO_DESIGN": {
						"x": 21,
						"y": 4,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_CLEAN_CODE",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_REFLECTIVE_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "evo_design",
						"is_key": false
					},
					"SK_FEATURE_ISOLATION": {
						"x": 21,
						"y": 5,
						"level": "L_AWESOME",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_FAST_AUTO_DEPLOY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "feature_isolation",
						"is_key": false
					},
					"SK_AUTO_ROLLBACK": {
						"x": 21,
						"y": 6,
						"level": "L_AWESOME",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_AUTO_DEPLOY_VERIFY",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "auto_rollback",
						"is_key": true
					},
					"SK_HYPOTHESIS_STORIES": {
						"x": 21,
						"y": 7,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORY_CLUSTERING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_INTENTIONAL_TECHNICAL_DEBT",
								"kind": "IS_HELPFUL"
							}
						],
						"obsoletes": [],
						"slug": "hypothesis_stories",
						"is_key": true
					},
					"SK_EXPERIENCE_FOCUS": {
						"x": 21,
						"y": 8,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_STORY_CLUSTERING",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "experience_focus",
						"is_key": false
					},
					"SK_PROJECTIONS": {
						"x": 21,
						"y": 10,
						"level": "L_AWESOME",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_ROLLING_WAVE_PLANNING",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SHORT_TERM_RELIABILITY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "projections",
						"is_key": false
					},
					"SK_UNIVERSAL_SPECIALIST": {
						"x": 22,
						"y": 2,
						"level": "L_AWESOME",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_M_SHAPED",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "universal_specialist",
						"is_key": false
					},
					"SK_NO_BUGS": {
						"x": 22,
						"y": 3,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_EVO_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_BUG_RATCHET",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PAIR_ALWAYS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "bugs_zero",
						"is_key": true
					},
					"SK_TELL_VS_ASK": {
						"x": 22,
						"y": 5,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_EVO_DESIGN",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "tell_vs_ask",
						"is_key": false
					},
					"SK_WHOLE_TEAM_BUSINESS": {
						"x": 22,
						"y": 8,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_EXPERIENCE_FOCUS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_M_SHAPED",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "whole_team_business",
						"is_key": false
					},
					"SK_SMOOTH_FLOW": {
						"x": 22,
						"y": 9,
						"level": "L_AWESOME",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_CONTINUOUS_PLAN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_PROJECTIONS",
								"kind": "IS_HELPFUL"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "smooth_flow",
						"is_key": false
					},
					"SK_YAGNI": {
						"x": 23,
						"y": 3,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_NO_BUGS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "yagni",
						"is_key": false
					},
					"SK_CONT_SHIP": {
						"x": 23,
						"y": 6,
						"level": "L_AWESOME",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_NO_BUGS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_FEATURE_ISOLATION",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "cont_ship",
						"is_key": false
					},
					"SK_TIP": {
						"x": 23,
						"y": 7,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_HYPOTHESIS_STORIES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_NO_BUGS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "tip",
						"is_key": false
					},
					"SK_SINGLE_PIECE_FLOW": {
						"x": 23,
						"y": 9,
						"level": "L_AWESOME",
						"component": "V_SUSTAINABLE",
						"requires": [
							{
								"skill": "SK_SMOOTH_FLOW",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "single_piece_flow",
						"is_key": false
					},
					"SK_PROCESS_INNOVATION": {
						"x": 24,
						"y": 0,
						"level": "L_AWESOME",
						"component": "V_IMPROVE",
						"requires": [
							{
								"skill": "SK_PROCESS_EXPERIMENTS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_LEARN_ALL",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "process_innovation",
						"is_key": false
					},
					"SK_RADICAL_COLLABORATE": {
						"x": 24,
						"y": 2,
						"level": "L_AWESOME",
						"component": "V_LEARN",
						"requires": [
							{
								"skill": "SK_M_SHAPED",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SINGLE_PIECE_FLOW",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "radical_collaborate",
						"is_key": false
					},
					"SK_TDDESIGN": {
						"x": 24,
						"y": 4,
						"level": "L_AWESOME",
						"component": "V_CHECK_WORK",
						"requires": [
							{
								"skill": "SK_EVO_DESIGN",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_SIMUL_PHASES",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TELL_VS_ASK",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "tddesign",
						"is_key": false
					},
					"SK_CONT_DEPLOY": {
						"x": 24,
						"y": 6,
						"level": "L_AWESOME",
						"component": "V_SHIP",
						"requires": [
							{
								"skill": "SK_CONT_SHIP",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_AUTO_ROLLBACK",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TIP",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "cont_deploy",
						"is_key": false
					},
					"SK_METRICS_FOCUS": {
						"x": 24,
						"y": 7,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_EXPERIENCE_FOCUS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TIP",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "metrics_focus",
						"is_key": false
					},
					"SK_LISTEN_TO_CODE": {
						"x": 25,
						"y": 3,
						"level": "L_AWESOME",
						"component": "V_CODE",
						"requires": [
							{
								"skill": "SK_YAGNI",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_TDDESIGN",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "listen_to_code",
						"is_key": false
					},
					"SK_LEAN_STARTUP": {
						"x": 25,
						"y": 8,
						"level": "L_AWESOME",
						"component": "V_REQUIREMENTS",
						"requires": [
							{
								"skill": "SK_METRICS_FOCUS",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_CONT_DEPLOY",
								"kind": "IS_REQUIRED"
							},
							{
								"skill": "SK_WHOLE_TEAM_BUSINESS",
								"kind": "IS_REQUIRED"
							}
						],
						"obsoletes": [],
						"slug": "lean_startup",
						"is_key": true
					}
				},
				"levels": {
					"L_TRADITIONAL": {
						"slug": "traditional",
						"min": -1,
						"max": 5,
						"color": "#cccccc"
					},
					"L_TEAM": {
						"slug": "team",
						"min": 6,
						"max": 8,
						"color": "#dedede"
					},
					"L_CORE": {
						"slug": "modern_core",
						"min": 9,
						"max": 11,
						"color": "#cccccc"
					},
					"L_ADAPTIVE": {
						"slug": "adaptive",
						"min": 12,
						"max": 15,
						"color": "#dedede"
					},
					"L_LEVERAGE": {
						"slug": "leverage",
						"min": 16,
						"max": 17,
						"color": "#cccccc"
					},
					"L_NO_DEBT": {
						"slug": "no_debt",
						"min": 18,
						"max": 20,
						"color": "#dedede"
					},
					"L_AWESOME": {
						"slug": "awesome",
						"min": 21,
						"max": 26,
						"color": "#cccccc"
					}
				},
				"components": {
					"V_CHECK_WORK": {
						"name": "Check your work",
						"techniques": "TDD, Exploratory Testing",
						"color": "cornflowerblue",
						"slug": "test"
					},
					"V_CODE": {
						"name": "Write good code",
						"techniques": "Refactoring, Design, Recovering legacy code",
						"color": "limegreen",
						"slug": "code"
					},
					"V_SHIP": {
						"name": "Ship at will",
						"techniques": "Continuous Integration, Continuous Deployment, Dev Ops",
						"color": "#A825D3",
						"slug": "ship"
					},
					"V_REQUIREMENTS": {
						"name": "Know what to build",
						"techniques": "Stories, Vertical Decomposition, Planning",
						"color": "orange",
						"slug": "plan"
					},
					"V_LEARN": {
						"name": "Discipline and learning",
						"techniques": "Pairing, Mobbing",
						"color": "fuchsia",
						"slug": "learn"
					},
					"V_IMPROVE": {
						"name": "Improve as a team",
						"techniques": "Teams, Retrospectives",
						"color": "#cf4040",
						"slug": "team"
					},
					"V_SUSTAINABLE": {
						"name": "Not hurried",
						"techniques": "Velocity, Planning to Capacity",
						"color": "#bc8f8f",
						"slug": "sustain"
					}
				}
			}
		},
		"levels": {
			"L_TRADITIONAL": {
				"slug": "traditional",
				"min": -1,
				"max": 5,
				"color": "#cccccc"
			},
			"L_TEAM": {
				"slug": "team",
				"min": 6,
				"max": 8,
				"color": "#dedede"
			},
			"L_CORE": {
				"slug": "modern_core",
				"min": 9,
				"max": 11,
				"color": "#cccccc"
			},
			"L_ADAPTIVE": {
				"slug": "adaptive",
				"min": 12,
				"max": 15,
				"color": "#dedede"
			},
			"L_LEVERAGE": {
				"slug": "leverage",
				"min": 16,
				"max": 17,
				"color": "#cccccc"
			},
			"L_NO_DEBT": {
				"slug": "no_debt",
				"min": 18,
				"max": 20,
				"color": "#dedede"
			},
			"L_AWESOME": {
				"slug": "awesome",
				"min": 21,
				"max": 26,
				"color": "#cccccc"
			}
		},
		"components": {
			"V_CHECK_WORK": {
				"name": "Check your work",
				"techniques": "TDD, Exploratory Testing",
				"color": "cornflowerblue",
				"slug": "test"
			},
			"V_CODE": {
				"name": "Write good code",
				"techniques": "Refactoring, Design, Recovering legacy code",
				"color": "limegreen",
				"slug": "code"
			},
			"V_SHIP": {
				"name": "Ship at will",
				"techniques": "Continuous Integration, Continuous Deployment, Dev Ops",
				"color": "#A825D3",
				"slug": "ship"
			},
			"V_REQUIREMENTS": {
				"name": "Know what to build",
				"techniques": "Stories, Vertical Decomposition, Planning",
				"color": "orange",
				"slug": "plan"
			},
			"V_LEARN": {
				"name": "Discipline and learning",
				"techniques": "Pairing, Mobbing",
				"color": "fuchsia",
				"slug": "learn"
			},
			"V_IMPROVE": {
				"name": "Improve as a team",
				"techniques": "Teams, Retrospectives",
				"color": "#cf4040",
				"slug": "team"
			},
			"V_SUSTAINABLE": {
				"name": "Not hurried",
				"techniques": "Velocity, Planning to Capacity",
				"color": "#bc8f8f",
				"slug": "sustain"
			}
		},
		"dependency_kinds": {
			"IS_REQUIRED": {
				"name": "required",
				"description": "Doing A is nearly required to do B",
				"dash_style": [],
				"border_style": "solid"
			},
			"IS_HELPFUL": {
				"name": "helpful",
				"description": "Doing A helps a lot when doing B",
				"dash_style": [
					8
				],
				"border_style": "dashed"
			}
		},
		"help_kinds": {
			"H_KEY": "key idea",
			"H_CORE": "description and recipies",
			"H_REQS": "explain requirements",
			"H_ADV": "advantages and considerations",
			"H_REVIEW": "review"
		},
		"skills": {
			"SK_WORK_GROUPS": {
				"x": 0,
				"y": 0,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"obsoletes": [],
				"slug": "work_groups",
				"is_key": false
			},
			"SK_HELP_AD_HOC": {
				"x": 0,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [],
				"obsoletes": [],
				"slug": "help_ad_hoc",
				"is_key": false
			},
			"SK_COWBOY": {
				"x": 0,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [],
				"obsoletes": [],
				"slug": "cowboy",
				"is_key": false
			},
			"SK_QA": {
				"x": 0,
				"y": 6,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": [],
				"obsoletes": [],
				"slug": "qa",
				"is_key": false
			},
			"SK_STASIS": {
				"x": 0,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"obsoletes": [],
				"slug": "stasis",
				"is_key": false
			},
			"SK_MANUAL_PACKAGE": {
				"x": 0,
				"y": 8,
				"level": "L_TRADITIONAL",
				"component": "V_SHIP",
				"requires": [],
				"obsoletes": [],
				"slug": "manual_package",
				"is_key": false
			},
			"SK_BUILD_FOR_ME": {
				"x": 0,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [],
				"obsoletes": [],
				"slug": "build_for_me",
				"is_key": false
			},
			"SK_DEATH_MARCH": {
				"x": 0,
				"y": 11,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"obsoletes": [],
				"slug": "death_march",
				"is_key": false
			},
			"SK_TEAM_LEADS": {
				"x": 1,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_HELP_AD_HOC",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "team_leads",
				"is_key": false
			},
			"SK_BDUF": {
				"x": 1,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [],
				"obsoletes": [
					"SK_COWBOY"
				],
				"slug": "bduf",
				"is_key": false
			},
			"SK_DEV_CHECK": {
				"x": 1,
				"y": 6,
				"level": "L_TRADITIONAL",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_QA",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "dev_check",
				"is_key": false
			},
			"SK_CENTRAL_PROCESS": {
				"x": 1,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [],
				"obsoletes": [
					"SK_STASIS"
				],
				"slug": "central_process",
				"is_key": false
			},
			"SK_AUTO_PACKAGE": {
				"x": 1,
				"y": 8,
				"level": "L_TRADITIONAL",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_MANUAL_PACKAGE",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "auto_package",
				"is_key": false
			},
			"SK_REQUIREMENTS": {
				"x": 1,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [],
				"obsoletes": [
					"SK_BUILD_FOR_ME"
				],
				"slug": "requirements",
				"is_key": false
			},
			"SK_WATERFALL_MILESTONES": {
				"x": 1,
				"y": 11,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"obsoletes": [
					"SK_DEATH_MARCH"
				],
				"slug": "waterfall_milestones",
				"is_key": false
			},
			"SK_CODE_REVIEW": {
				"x": 2,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_HELP_AD_HOC",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEAM_LEADS",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "code_review",
				"is_key": false
			},
			"SK_FORMAL_TRAINING": {
				"x": 2,
				"y": 3,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAM_LEADS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "formal_training",
				"is_key": false
			},
			"SK_DESIGN_PATTERNS": {
				"x": 2,
				"y": 4,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_BDUF",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "design_patterns",
				"is_key": false
			},
			"SK_POST_MORTEM": {
				"x": 2,
				"y": 7,
				"level": "L_TRADITIONAL",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_CENTRAL_PROCESS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "post_mortem",
				"is_key": false
			},
			"SK_SLACK": {
				"x": 2,
				"y": 10,
				"level": "L_TRADITIONAL",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"obsoletes": [],
				"slug": "slack",
				"is_key": false
			},
			"SK_PAIR_OCCASIONAL": {
				"x": 3,
				"y": 2,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_CODE_REVIEW",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "pair_occasional",
				"is_key": false
			},
			"SK_CODE_PREVIEW": {
				"x": 3,
				"y": 3,
				"level": "L_TRADITIONAL",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_CODE_REVIEW",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "code_preview",
				"is_key": false
			},
			"SK_B_ARCHI_UF": {
				"x": 3,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DESIGN_PATTERNS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "b_archi_uf",
				"is_key": false
			},
			"SK_SMALL_SPECS": {
				"x": 3,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REQUIREMENTS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "small_specs",
				"is_key": false
			},
			"SK_PREDICTIVE_WITH_SMELLS": {
				"x": 4,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_B_ARCHI_UF",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "predictive_with_smells",
				"is_key": false
			},
			"SK_ITERATED_PREDICTIVE": {
				"x": 5,
				"y": 5,
				"level": "L_TRADITIONAL",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_PREDICTIVE_WITH_SMELLS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "iterated_predictive",
				"is_key": false
			},
			"SK_SMALL_BATCHES": {
				"x": 5,
				"y": 9,
				"level": "L_TRADITIONAL",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "small_specs",
				"is_key": true
			},
			"SK_TEAMS": {
				"x": 6,
				"y": 0,
				"level": "L_TEAM",
				"component": "V_IMPROVE",
				"requires": [],
				"obsoletes": [
					"SK_WORK_GROUPS"
				],
				"slug": "teams",
				"is_key": true
			},
			"SK_VISIBLE_WORK": {
				"x": 7,
				"y": 1,
				"level": "L_TEAM",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SMALL_BATCHES",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "visible_work",
				"is_key": false
			},
			"SK_SIT_TOGETHER": {
				"x": 7,
				"y": 3,
				"level": "L_TEAM",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "sit_together",
				"is_key": false
			},
			"SK_CHARTER": {
				"x": 7,
				"y": 4,
				"level": "L_TEAM",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "charter",
				"is_key": false
			},
			"SK_RETROS": {
				"x": 8,
				"y": 0,
				"level": "L_TEAM",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_CHARTER",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "retros",
				"is_key": false
			},
			"SK_SHARED_CODE": {
				"x": 9,
				"y": 1,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_TEAMS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_VISIBLE_WORK",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "shared_code",
				"is_key": true
			},
			"SK_SYSTEMS_THINKING": {
				"x": 9,
				"y": 3,
				"level": "L_CORE",
				"component": "V_IMPROVE",
				"requires": [],
				"obsoletes": [],
				"slug": "vertical_decomposition",
				"is_key": false
			},
			"SK_LOCAL_REFACTORING": {
				"x": 9,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "local_refactoring",
				"is_key": true
			},
			"SK_AUTO_DEV_TEST": {
				"x": 9,
				"y": 6,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_DEV_CHECK",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_SLACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "auto_dev_test",
				"is_key": false
			},
			"SK_VERT_DECOMP": {
				"x": 9,
				"y": 8,
				"level": "L_CORE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SMALL_BATCHES",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "vertical_decomposition",
				"is_key": false
			},
			"SK_PULL": {
				"x": 9,
				"y": 12,
				"level": "L_CORE",
				"component": "V_SUSTAINABLE",
				"requires": [],
				"obsoletes": [],
				"slug": "pull",
				"is_key": false
			},
			"SK_PAIR_REGULARLY": {
				"x": 10,
				"y": 2,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_OCCASIONAL",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_SHARED_CODE",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_RETROS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [
					"SK_CODE_REVIEW"
				],
				"slug": "pair_regularly",
				"is_key": false
			},
			"SK_AUTO_BUILD_VERIFY": {
				"x": 10,
				"y": 7,
				"level": "L_CORE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_PACKAGE",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "auto_build_verify",
				"is_key": false
			},
			"SK_LIMIT_WIP": {
				"x": 10,
				"y": 10,
				"level": "L_CORE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_PULL",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "limit_work_continuous",
				"is_key": false
			},
			"SK_ACTION_RETROS": {
				"x": 11,
				"y": 0,
				"level": "L_CORE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_RETROS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SYSTEMS_THINKING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LIMIT_WIP",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "improvement_process",
				"is_key": false
			},
			"SK_T_SHAPED": {
				"x": 11,
				"y": 1,
				"level": "L_CORE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_SHARED_CODE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "t_shaped",
				"is_key": false
			},
			"SK_DRY": {
				"x": 11,
				"y": 3,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DESIGN_PATTERNS",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_LOCAL_REFACTORING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "dry",
				"is_key": false
			},
			"SK_READ_BY_REFACTORING": {
				"x": 11,
				"y": 4,
				"level": "L_CORE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_LOCAL_REFACTORING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "read_by_refactoring",
				"is_key": true
			},
			"SK_TEST_FIRST": {
				"x": 11,
				"y": 6,
				"level": "L_CORE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "test_first",
				"is_key": false
			},
			"SK_COLLECTIVE_OWNERSHIP": {
				"x": 12,
				"y": 1,
				"level": "L_ADAPTIVE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_T_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "collective_ownership",
				"is_key": false
			},
			"SK_WRITE_UNITS": {
				"x": 12,
				"y": 4,
				"level": "L_ADAPTIVE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_READ_BY_REFACTORING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "write_units",
				"is_key": false
			},
			"SK_DONE_DEFINITION": {
				"x": 12,
				"y": 5,
				"level": "L_ADAPTIVE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_SHARED_CODE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SMALL_SPECS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "done_definition",
				"is_key": false
			},
			"SK_AUTO_DEPLOY": {
				"x": 12,
				"y": 7,
				"level": "L_ADAPTIVE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "auto_deploy",
				"is_key": false
			},
			"SK_LEARN_LOCALLY": {
				"x": 13,
				"y": 0,
				"level": "L_ADAPTIVE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "learn_locally",
				"is_key": false
			},
			"SK_PAIR_PRODUCTION": {
				"x": 13,
				"y": 2,
				"level": "L_ADAPTIVE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_COLLECTIVE_OWNERSHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIT_TOGETHER",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "pair_production",
				"is_key": false
			},
			"SK_ITERATION": {
				"x": 13,
				"y": 11,
				"level": "L_ADAPTIVE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_WATERFALL_MILESTONES",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "iteration",
				"is_key": false
			},
			"SK_PAIR_ALWAYS": {
				"x": 14,
				"y": 2,
				"level": "L_ADAPTIVE",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_PRODUCTION",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "pair_always",
				"is_key": true
			},
			"SK_TEST_UNITS": {
				"x": 14,
				"y": 6,
				"level": "L_ADAPTIVE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_WRITE_UNITS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_PRODUCTION",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "test_units",
				"is_key": true
			},
			"SK_STORIES": {
				"x": 14,
				"y": 8,
				"level": "L_ADAPTIVE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_SMALL_BATCHES",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_VERT_DECOMP",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "stories",
				"is_key": false
			},
			"SK_BUG_FREE_NEW_CODE": {
				"x": 15,
				"y": 1,
				"level": "L_ADAPTIVE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "bug_free_new_code",
				"is_key": true
			},
			"SK_REFLECTIVE_DESIGN": {
				"x": 15,
				"y": 3,
				"level": "L_ADAPTIVE",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_DRY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_READ_BY_REFACTORING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_REGULARLY",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "reflective_design",
				"is_key": false
			},
			"SK_FAST_BUILD_VERIFY": {
				"x": 15,
				"y": 6,
				"level": "L_ADAPTIVE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "fast_build_verify",
				"is_key": false
			},
			"SK_TRACK_CAPACITY": {
				"x": 15,
				"y": 10,
				"level": "L_ADAPTIVE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_ITERATION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_STORIES",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "track_capacity",
				"is_key": false
			},
			"SK_LEARN_ALL": {
				"x": 16,
				"y": 0,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_LEARN_LOCALLY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "learn_all",
				"is_key": false
			},
			"SK_PROCESS_EXPERIMENTS": {
				"x": 16,
				"y": 1,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_ACTION_RETROS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LEARN_LOCALLY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "process_experiments",
				"is_key": false
			},
			"SK_LEARN_VS_PROVE": {
				"x": 16,
				"y": 3,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_DONE_DEFINITION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_DEV_TEST",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "learn_vs_prove",
				"is_key": false
			},
			"SK_TEST_BEYOND_CORRECT": {
				"x": 16,
				"y": 5,
				"level": "L_LEVERAGE",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_DONE_DEFINITION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "test_beyond_correct",
				"is_key": false
			},
			"SK_FAST_AUTO_DEPLOY": {
				"x": 16,
				"y": 7,
				"level": "L_LEVERAGE",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_FAST_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "fast_auto_deploy",
				"is_key": false
			},
			"SK_STORY_CLUSTERING": {
				"x": 16,
				"y": 8,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "story_clustering",
				"is_key": false
			},
			"SK_ADAPTIVE_PLANNING": {
				"x": 16,
				"y": 9,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_SMALL_BATCHES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ITERATION",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_STORIES",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "adaptive_planning",
				"is_key": false
			},
			"SK_RELATIVE_ESTIMATES": {
				"x": 16,
				"y": 10,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "relative_estimates",
				"is_key": false
			},
			"SK_LIMIT_WORK_TO_CAPACITY": {
				"x": 16,
				"y": 11,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_SLACK",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_TRACK_CAPACITY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ITERATION",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "limit_work_to_capacity",
				"is_key": false
			},
			"SK_CONTINUOUS_PLAN": {
				"x": 16,
				"y": 12,
				"level": "L_LEVERAGE",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_PULL",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "continuous_plan",
				"is_key": false
			},
			"SK_SESSION_MANUAL_TESTING": {
				"x": 17,
				"y": 3,
				"level": "L_LEVERAGE",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_LEARN_VS_PROVE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_BUILD_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "session_manual_testing",
				"is_key": false
			},
			"SK_ROLLING_WAVE_PLANNING": {
				"x": 17,
				"y": 9,
				"level": "L_LEVERAGE",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ADAPTIVE_PLANNING",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "rolling_wave_planning",
				"is_key": false
			},
			"SK_BUG_RATCHET": {
				"x": 18,
				"y": 2,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_BUG_FREE_NEW_CODE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SESSION_MANUAL_TESTING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_BEYOND_CORRECT",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "bug_ratchet",
				"is_key": false
			},
			"SK_IMPROVING_PROOF": {
				"x": 18,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_SESSION_MANUAL_TESTING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_BEYOND_CORRECT",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "improving_proof",
				"is_key": false
			},
			"SK_TEST_LEGACY": {
				"x": 18,
				"y": 4,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "test_legacy",
				"is_key": false
			},
			"SK_RGR": {
				"x": 18,
				"y": 5,
				"level": "L_NO_DEBT",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_UNITS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "rgr",
				"is_key": false
			},
			"SK_AUTO_DEPLOY_VERIFY": {
				"x": 18,
				"y": 6,
				"level": "L_NO_DEBT",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_FAST_AUTO_DEPLOY",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "auto_deploy_verify",
				"is_key": false
			},
			"SK_VERIFY_EXAMPLES": {
				"x": 18,
				"y": 7,
				"level": "L_NO_DEBT",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORIES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TEST_FIRST",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "verify_examples",
				"is_key": false
			},
			"SK_DATA_DRIVEN_CAPACITY": {
				"x": 18,
				"y": 11,
				"level": "L_NO_DEBT",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_RELATIVE_ESTIMATES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LIMIT_WORK_TO_CAPACITY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "data_driven_capacity",
				"is_key": false
			},
			"SK_FIX_LEGACY": {
				"x": 19,
				"y": 4,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_TEST_LEGACY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_BUG_RATCHET",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_COLLECTIVE_OWNERSHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_IMPROVING_PROOF",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "fix_legacy",
				"is_key": true
			},
			"SK_SIMUL_PHASES": {
				"x": 19,
				"y": 5,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_RGR",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_FAST_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ADAPTIVE_PLANNING",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "simul_phases",
				"is_key": true
			},
			"SK_CLEAN_CODE": {
				"x": 20,
				"y": 3,
				"level": "L_NO_DEBT",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_FIX_LEGACY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "clean_code",
				"is_key": false
			},
			"SK_INTENTIONAL_TECHNICAL_DEBT": {
				"x": 20,
				"y": 9,
				"level": "L_NO_DEBT",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_FIX_LEGACY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "intentional_technical_debt",
				"is_key": false
			},
			"SK_SHORT_TERM_RELIABILITY": {
				"x": 20,
				"y": 11,
				"level": "L_NO_DEBT",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_DATA_DRIVEN_CAPACITY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_ADAPTIVE_PLANNING",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "reliability",
				"is_key": false
			},
			"SK_M_SHAPED": {
				"x": 21,
				"y": 1,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "m_shaped",
				"is_key": false
			},
			"SK_EVO_DESIGN": {
				"x": 21,
				"y": 4,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_CLEAN_CODE",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_REFLECTIVE_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "evo_design",
				"is_key": false
			},
			"SK_FEATURE_ISOLATION": {
				"x": 21,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_FAST_AUTO_DEPLOY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "feature_isolation",
				"is_key": false
			},
			"SK_AUTO_ROLLBACK": {
				"x": 21,
				"y": 6,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_AUTO_DEPLOY_VERIFY",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "auto_rollback",
				"is_key": true
			},
			"SK_HYPOTHESIS_STORIES": {
				"x": 21,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_INTENTIONAL_TECHNICAL_DEBT",
						"kind": "IS_HELPFUL"
					}
				],
				"obsoletes": [],
				"slug": "hypothesis_stories",
				"is_key": true
			},
			"SK_EXPERIENCE_FOCUS": {
				"x": 21,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_STORY_CLUSTERING",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "experience_focus",
				"is_key": false
			},
			"SK_PROJECTIONS": {
				"x": 21,
				"y": 10,
				"level": "L_AWESOME",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_ROLLING_WAVE_PLANNING",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SHORT_TERM_RELIABILITY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "projections",
				"is_key": false
			},
			"SK_UNIVERSAL_SPECIALIST": {
				"x": 22,
				"y": 2,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "universal_specialist",
				"is_key": false
			},
			"SK_NO_BUGS": {
				"x": 22,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_BUG_RATCHET",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PAIR_ALWAYS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "bugs_zero",
				"is_key": true
			},
			"SK_TELL_VS_ASK": {
				"x": 22,
				"y": 5,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "tell_vs_ask",
				"is_key": false
			},
			"SK_WHOLE_TEAM_BUSINESS": {
				"x": 22,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_EXPERIENCE_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "whole_team_business",
				"is_key": false
			},
			"SK_SMOOTH_FLOW": {
				"x": 22,
				"y": 9,
				"level": "L_AWESOME",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_CONTINUOUS_PLAN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_PROJECTIONS",
						"kind": "IS_HELPFUL"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "smooth_flow",
				"is_key": false
			},
			"SK_YAGNI": {
				"x": 23,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "yagni",
				"is_key": false
			},
			"SK_CONT_SHIP": {
				"x": 23,
				"y": 6,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_FEATURE_ISOLATION",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "cont_ship",
				"is_key": false
			},
			"SK_TIP": {
				"x": 23,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_HYPOTHESIS_STORIES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_NO_BUGS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "tip",
				"is_key": false
			},
			"SK_SINGLE_PIECE_FLOW": {
				"x": 23,
				"y": 9,
				"level": "L_AWESOME",
				"component": "V_SUSTAINABLE",
				"requires": [
					{
						"skill": "SK_SMOOTH_FLOW",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "single_piece_flow",
				"is_key": false
			},
			"SK_PROCESS_INNOVATION": {
				"x": 24,
				"y": 0,
				"level": "L_AWESOME",
				"component": "V_IMPROVE",
				"requires": [
					{
						"skill": "SK_PROCESS_EXPERIMENTS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_LEARN_ALL",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "process_innovation",
				"is_key": false
			},
			"SK_RADICAL_COLLABORATE": {
				"x": 24,
				"y": 2,
				"level": "L_AWESOME",
				"component": "V_LEARN",
				"requires": [
					{
						"skill": "SK_M_SHAPED",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SINGLE_PIECE_FLOW",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "radical_collaborate",
				"is_key": false
			},
			"SK_TDDESIGN": {
				"x": 24,
				"y": 4,
				"level": "L_AWESOME",
				"component": "V_CHECK_WORK",
				"requires": [
					{
						"skill": "SK_EVO_DESIGN",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_SIMUL_PHASES",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TELL_VS_ASK",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "tddesign",
				"is_key": false
			},
			"SK_CONT_DEPLOY": {
				"x": 24,
				"y": 6,
				"level": "L_AWESOME",
				"component": "V_SHIP",
				"requires": [
					{
						"skill": "SK_CONT_SHIP",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_AUTO_ROLLBACK",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TIP",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "cont_deploy",
				"is_key": false
			},
			"SK_METRICS_FOCUS": {
				"x": 24,
				"y": 7,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_EXPERIENCE_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TIP",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "metrics_focus",
				"is_key": false
			},
			"SK_LISTEN_TO_CODE": {
				"x": 25,
				"y": 3,
				"level": "L_AWESOME",
				"component": "V_CODE",
				"requires": [
					{
						"skill": "SK_YAGNI",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_TDDESIGN",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "listen_to_code",
				"is_key": false
			},
			"SK_LEAN_STARTUP": {
				"x": 25,
				"y": 8,
				"level": "L_AWESOME",
				"component": "V_REQUIREMENTS",
				"requires": [
					{
						"skill": "SK_METRICS_FOCUS",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_CONT_DEPLOY",
						"kind": "IS_REQUIRED"
					},
					{
						"skill": "SK_WHOLE_TEAM_BUSINESS",
						"kind": "IS_REQUIRED"
					}
				],
				"obsoletes": [],
				"slug": "lean_startup",
				"is_key": true
			}
		},
		"descriptions": {
			"SK_WORK_GROUPS": {
				"name": "Matrixed pseudo-teams",
				"description": [
					"bq>. n people work on m teams",
					"",
					"h1. What this is",
					"",
					"Some of the people working on a project are also assigned to other projects, often in an inconsistent way.",
					"",
					"The canonical example is \"You get 5% of the DBA on your project.\"",
					"",
					"An exception is a stable group of 8 people who together work on _m_ different projects--that's OK. It's the _team_ that matters, not the project.",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_HELP_AD_HOC": {
				"name": "Ad-hoc helping",
				"description": [
					"bq>. Hey, can you help me with this?",
					"",
					"h1. What this is",
					"",
					"Since we're working to the same goal, we can ask each other for help from time to time.",
					"",
					"Typically you'll seek out the expert in the technology/skill/whatever for the problem you are facing.",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_COWBOY": {
				"name": "Cowboy coding",
				"description": [
					"bq>. Programmer acting alone, without consulting or informing anyone else of their actions.",
					"",
					"h1. What this is",
					"",
					"Sometimes, quickly iterating and pushing a product into production, ",
					"even if somewhat careless, can be beneficial because the alternative ",
					"may not be finishing anything.",
					"",
					"h2. How it helps",
					"",
					"Can sometimes be a way of getting things done that wouldn't get done otherwise.",
					"",
					"h2. Mindshifts",
					"",
					"Delivering user value can be more important then maintinability in ",
					"some cases. For instance, what if your company is 2 weeks from being ",
					"out of cash, its better to ship something then nothing at all.",
					"",
					"h2. Measuring impact",
					"",
					"You are shipping things, where as before you weren't shipping",
					"",
					"If you are doing this well, you should see improvements in:",
					"",
					"* Getting code out the door",
					"",
					"h2. Side effects",
					"",
					"Cowboy has significant side effects. You may be shipping code",
					"that has obvious defects. It might be completely one off and have ",
					"no future value.",
					""
				],
				"help_needed": [
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_QA": {
				"name": "Quality Assurance",
				"description": [
					"bq>. We want to find our bugs before customers do.",
					"",
					"h1. What this is",
					"",
					"A dedicated person or team who's job it is to find defects before the software is shipped to customers.",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_STASIS": {
				"name": "Stasis",
				"description": [
					"bq>. We're too busy to get better.",
					"",
					"h1. What this is",
					"",
					"No improvement. May actually be regression, as \"capability decays over time\":http://web.mit.edu/nelsonr/www/Repenning%3DSterman_CMR_su01_.pdf.",
					"",
					"h2. How it helps",
					"",
					"TBD",
					"",
					"h2. Mindshifts",
					"",
					"TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_MANUAL_PACKAGE": {
				"name": "Manual build and package",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_BUILD_FOR_ME": {
				"name": "Build for myself",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_DEATH_MARCH": {
				"name": "Death marches",
				"description": [
					"bq>. We will do whatever it takes to ship.",
					"",
					"h1. What this is",
					"",
					"As deadlines loom (and then whiz by!) we start working longer hours to get the product out the door. Buy dinner for the team. Sunday is family day at the office\". ",
					"",
					"When the product finally ships, people feel like heroes. Dirty heroes.",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TEAM_LEADS": {
				"name": "Team leads",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_BDUF": {
				"name": "Big design up front",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_DEV_CHECK": {
				"name": "Developer Checking",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_CENTRAL_PROCESS": {
				"name": "Centralized improvement",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_AUTO_PACKAGE": {
				"name": "Automated package",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_REQUIREMENTS": {
				"name": "Product requirements",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_WATERFALL_MILESTONES": {
				"name": "Waterfall milestones",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_CODE_REVIEW": {
				"name": "Code review",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"Before committing source code changes, get another person to review & sign off. (Sometimes it's a designated owner or senior team member.)",
					"",
					"###. h2. How it helps",
					"",
					"- \"Obvious\" mistakes can get caught in review before they do damage",
					"",
					"- A second person knows what is going on, in case the original dev is not available later on.",
					"",
					"- The reviewer can advocate for consistency of style and other team discipline.",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_FORMAL_TRAINING": {
				"name": "Formal training",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_DESIGN_PATTERNS": {
				"name": "Pattern-oriented design",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_POST_MORTEM": {
				"name": "Post-mortems",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SLACK": {
				"name": "Build slack in",
				"description": [
					"bq>. We deliver on our commitments.",
					"",
					"h1. What this is",
					"",
					"All software development projects involve some level of randomization. Often this results from unclear requirements, unfamiliarity with the solution or parts of the code base, unexpected illness of a team member, murphy's law or some other factor. By building slack into every iteration, teams can deliver on their commitments despite these randomizations.",
					"",
					"h2. How it helps",
					"",
					"Incorporating slack into development iterations helps the team to absorb small fluctuations and interruptions without affecting the shipping schedule. Slack allows the team to adjust and deliver on commitments without the need for egregious amounts of overtime and the resultant risk of burnout. ",
					"",
					"Additionally, [DeMarco 2002] states that reducing stress and reintroducing slack results in",
					"",
					"* **Increased organizational agility**",
					"* **Better retention of key personnel**",
					"* **An improved ability to invest in the future**",
					"* **A capacity for sensible risk taking instead of risk avoidance**",
					"",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"h1. Acquiring the skill",
					"",
					"bq. Schedule useful, important work that isn't time-critical--work you can set aside in case of an emergency [Shore 2007]",
					"",
					"Slack is only useful when it can be easily removed or discarded when your iteration commitment is at risk. You should resist the temptation to fill an iteration to capacity, even with lower priority stories that can be moved out if time runs out. Doing this often results in half-finished functionality and can be detrimental to a team's morale when it appears that they have not finished what they committed to. Slack acts as a buffer to the customer which contributes to a teams ability to sustain a productive pace indefinitely. However, teams should not confuse the deliberate act of adding slack into an iteration with the act of padding their estimates (i.e. overestimation) or adjusting capacity to account for busyness (e.g. by stating that developers will only have 6 hours per day of productivity).",
					"",
					"To build slack into an iteration-based agile process (e.g., scrum), choose an activity which is useful to your product or team, but which can be dropped at any moment without detriment to the codebase or design of the system. Plan to practice it deliberately and as a team at the end of each iteration. ",
					"",
					"With Kanban approaches, utilize Work-in-Progress limits to create a natural throttling mechanism that introduces slack when resources become bottle necked. Team members that are not able to contribute to unblocking these roadblocks can utilize this slack time to make improvements.",
					"",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"",
					"* **Pay Down Technical Debt**",
					"** Use slack time to pay down technical debt. This helps keep your codebase supple. Do not work on new features during this time. It is important that whatever work is in progress can be stopped at any time without being harmful. If your team is already skilled at local transform-based refactoring, this is a good time to practice those skills.",
					"* **Research Time**",
					"** Use slack time to research topics that are interesting to you. This does not need to directly relate to your project work, and it should not be used to research requirements for upcoming stories. Slack should not be used for normal project work or it risks losing its value. ",
					"* **Contribute to Quality-Improvement Efforts**",
					"** Test automation - help improve your test automation framework.",
					"** Deployment automation - make a small improvement to your deployment automation pipeline.",
					"** Architectural / Design refactoring - think about improvements to the design of your application or contribute to an ongoing design refactoring. Think about how mocks can be removed from the design.",
					"** Improving overall test coverage - write more tests or prune existing tests. Remove redundant tests or tests that no longer serve their original purpose. Refactor existing tests to simplify them, make them less brittle, or to clarify their intentions.",
					"",
					"h1. Attaining fluency",
					"",
					"Fluency can be attained by simply making slack a first-class citizen of your development process and sticking to your guns. This means deliberately talking about it at retrospectives, stand up meetings and planning sessions. Slack can be a hard sell to management, so measuring the usage and benefits of slack can help them to see the value.",
					"",
					"h2. Measuring proficiency",
					"",
					"Measure the utilization of slack. This can become a measure of how effective slack is at helping you to meet your commitments. It is also a good barometer for indicating how well your overall development and delivery process is working.",
					"",
					"In an iteration-based Agile process, measure how often slack time was shortened or eliminated due to emergencies or other randomization. This represents the number of times that slack was needed to smooth out problems.",
					"",
					"With Kanban or similar approaches, count and track the frequency of bottlenecks in the system and the amount of slack time that is accrued. Higher amounts of slack time normally mean that there are more frequent or more severe bottlenecks.",
					"",
					"",
					"h2. Recipes to follow",
					"",
					"* Identify and record the causes of randomization. ",
					"",
					"* Utilize retrospectives with outcomes. Discuss slack utilization at each retrospective. Address the randomizing elements that incur the need for slack.",
					"",
					"h2. Further resources",
					"",
					"\"The Art of Agile Development, 2nd edition [Shore, 2007]\":http://www.jamesshore.com/Agile-Book/slack.html",
					"Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency [DeMarco 2002]",
					"The Goal [Goldratt 1992]",
					"Critical Chain [Goldratt 1997]",
					"\"Silicon Valley Patterns Study of Domain-Driven Design\":https://www.youtube.com/watch?v=g9JrTcmFzzk",
					"\"XP Practice: Slack\":http://agilesoftwaredevelopment.com/xp/practices/slack",
					"\"Slack and Scheduling in XP[Shore, 2005]\":http://www.jamesshore.com/Blog/Slack%20and%20Scheduling%20in%20XP.html"
				],
				"help_needed": [
					"H_REVIEW"
				]
			},
			"SK_PAIR_OCCASIONAL": {
				"name": "Pairing on hard problems",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_CODE_PREVIEW": {
				"name": "Code preview",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_B_ARCHI_UF": {
				"name": "Just architecture up front",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SMALL_SPECS": {
				"name": "Small specs",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_PREDICTIVE_WITH_SMELLS": {
				"name": "Smell-based predictive design",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_ITERATED_PREDICTIVE": {
				"name": "Iterated predictive design",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SMALL_BATCHES": {
				"name": "Milestones and iterative specs",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TEAMS": {
				"name": "Single-assignment teams",
				"description": [
					"bq>. Cross-functional teams are the heart of modern software development.",
					"",
					"h1. What this is",
					"",
					"Modern software development is done by teams, not by groups of individuals. A well-functioning team is more flexible and has more capacity than the sum of the individuals who make it up.",
					"",
					"The critical elements are:",
					"",
					"* **Single assignment:** each individual is assigned to exactly one team at a time. No one is assigned to multiple teams; no one works as a loner (without a team).",
					"* **Cross-functional:** the team contains all skills, disciplines, or other specialties that are needed to deliver customer value to the marketplace. It can take an idea from concept to cash. Most such efforts do not require coordinating with other teams (or individuals).",
					"* **8 people:** 6-10 are OK. Numbers larger than this break trust formation (exceeds human family-scale trust boundary). Smaller numbers make it hard to cross-train (not enough heterogeneity).",
					"* **Shared purpose:** succeed or fail together. There is no way for one person on the team to succeed while others lose. Whether they work together or separately, they have one purpose.",
					"",
					"There are 2 known-good techniques for forming these teams. Other approaches may work, but these are the ones that have been tested in hundreds of industries.",
					"",
					"**Durable teams**. Add:",
					"",
					"* **Person-centric identity:** the team is a set of people that takes on work / projects. Identity is defined by the set of people on the team. It likely has a name like \"team Bluefish\" not like \"the Security team\" (a definition based on technical component) or \"the Pay by card project team\" (team identity based on project.",
					"* **Durable:** when a project finishes, the same team takes on a new project--which may be entirely unrelated. Team membership does not change very often; the team should commonly go years between any changes of members.",
					"",
					"**Rotational teams**. Add:",
					"",
					"* **Part of a 100-person team:** use this when you want people to associate to the 100-person group and are willing to lose some capacity in order to gain uniformity / consistency. The larger team should not exceed about 150 people, or tribe-scale identity will not form.",
					"* **Constant rotation:** all teams should constantly be forming and dissolving. Rotate in 2-3 people per week, or create teams for 2-10 weeks out of a larger pool.",
					"* **Strong culture of fun:** the whole point of this model is to enable tribe identity. So make sure that the tribe plays together--successful teams with the rotational model play together as part of work.",
					"",
					"Most companies are organized such that real teams can't form. They contain many things called \"teams,\" such as the set of people reporting to one manager or a \"virtual team\" composed of people who get together part-time to done one thing while all have primary responsibility to do something else with a different set of people. Yet these are each missing one of the key traits that would allow a team to form.",
					"",
					"h2. How it helps",
					"",
					"The team collaborates and reinforces each other.",
					"",
					"* The team can make a decision and then everyone helps everyone else hold to it.",
					"* The team can share skills.",
					"* The team members help each other and maximize overall throughput, rather than attempting to maximize their individual efficiency.",
					"",
					"h2. Mindshifts",
					"",
					"For managers:",
					"",
					"* Humans are not resources.",
					"* Stop allocating specialists to projects.",
					"",
					"For doers:",
					"",
					"None. Support your manager.",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_VISIBLE_WORK": {
				"name": "All work visible on one board",
				"description": [
					"bq>. If it is not on the one true board, it doesn't exist.",
					"",
					"h1. What this is",
					"",
					"There must be no hidden work, i.e. there must be no tasks or activities that team members do without others being aware of it. Additionally, there must be one single place to go that shows all the team's work.",
					"",
					"The simplest way to make the work in progress transparent is to have a board, physical or virtual, which represents the workflow that the team follows, reporting all the tasks in progress on the board itself.",
					"",
					"Preparing a kanban board is certainly a good starting point.",
					"",
					"h2. How it helps",
					"",
					"At any time, the team can quickly (visually) have an idea of the status of the activities. By viewing the work in progress, control mechanisms can be enabled on the amount of work in progress, highlighting any bottlenecks.",
					"",
					"By making the board visible even outside the team, a real information radiator is created which will allow the team to display the situation of the activities in real time to the outside: those who are interested in the team's activities will be able to consult the board before possibly interrupt the team to ask for information or to take charge of new activities.",
					"",
					"Having a board that represents your workflow, updated in real time as much as possible, helps communication within the team. A typical example is that of a team that meets daily to organize the day and does so, physically or virtually, having the board in front of it and moving the tasks contained therein in correspondence with the evolution of the activities.",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SIT_TOGETHER": {
				"name": "Sit together",
				"description": [
					"bq>. My whole team sits in one room. No one else is in my room. We overhear lots of information but no noise.",
					"",
					"h1. What this is",
					"",
					"The whole team sits in the same room. This makes it easy to share work. It also makes it easy to get answers to questions. This avoids either blocking on an answer or making a local decision without full information.",
					"",
					"The most important aspect of the team space is the audio bubble. The room must be sonically isolated from outside. Everyone who is in the room must be on the same team, working towards the same goals. If these conditions are not met, much of the conversation will become disruptive noise. This either results in disruption or pressure to stop talking. Neither is acceptable.",
					"",
					"It is helpful to also have retreat spaces outside of the team room (commonly referred to as a caves and commons layout). This need is critical if the team does not yet share work. The more the team shares work, the less these outside spaces will be used.",
					"",
					"Sitting together is designed to allow work to happen collaboratively. People should leave the room when they want to not work--because non-work activities are the only things not done together.",
					"",
					"The room MUST contain everything the team needs to do its work. This includes a lot of whiteboards, a large display or projector, a ton of office supplies, and appropriate telephony.",
					"",
					"h2. How it helps",
					"",
					"Sitting together changes the default mode of working. Collaboration becomes the norm; individual work becomes rare. This makes it a lot easier to develop all the other learning and discipline practices.",
					"",
					"Additionally, questions get answered immediately. It is trivial to notice implicit assumptions or disagreements and take them to a whiteboard. Everyone else on the team will overhear the whiteboard discussion. This keeps everyone informed and involved.",
					"",
					"h2. Mindshifts",
					"",
					"* Collaborate by default.",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"h2. Side effects",
					"",
					"Solo concentration is impaired. Fix this by using Pair / Mob for productivity.",
					"",
					"h1. Acquiring the skill",
					"",
					"You \"just\" need to move into a common room. This often requires significant political effort with Facilities.",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Make a standard room size. It should fit 8-10 comfortably. Seat 6-8 people in it. You will often bring in stakeholders; make sure your room accommodates them comfortably.",
					"",
					"Make every wall be either a window or a whiteboard. You can buy 4'x8' melamine sheets at a lumber store for about $6; they work well as whiteboards. Line the entire wall, from 1' to 9' height. If you want magnetic whiteboards, buy some steel screen and place it between the melamine and the wall. Converting an entire room should cost less than $300.",
					"",
					"Add a projector or large screen. Drive it off a cheap mini-PC. You can remote from the projector machine to any of your real computers. A/V should cost less than $800.",
					"",
					"h1. Attaining fluency",
					"",
					"Really taking advantage of sitting together requires that you talk with each other. A lot. Pairing or mobbing are a natural fit.",
					"",
					"Do not expect the space to support your old ways of working. You moved together to support new ways of working.",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Bring in customers, managers, and other stakeholders as needed. Take calls in the shared space. The whole point is to make it easy for everyone on the team to overhear what is happening.",
					"",
					"Start sharing your work. If you try to sit together without sharing your work, then everything will just be noise and disruption. If you aren't going to share work, then move back into offices and use a non-Agile method. Agile methods leverage shared work; other approaches work better if you are going to remain a confederation of individual workers.",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_CHARTER": {
				"name": "Team agreement / charter",
				"description": [
					"bq>. My team has a written agreement that describes how we work.",
					"",
					"h1. What this is",
					"",
					"The charter is a written contract that describes the team's ways of working. It makes explicit the ways we treat each other.",
					"",
					"Charters often include:",
					"",
					"* *Working agreements*: specific rules that we agree to follow when they apply.",
					"* *Simple rules*: context-free rules that we will try to apply at all times.",
					"* *Values*: beliefs we all hold to be true and will try to express whenever possible.",
					"* *Aim*: the purpose for the group. What it is intended to accomplish. Optimally this is a completable objective, not an open-ended condition.",
					"* *Scope*: any externally-imposed constraints on our resources and decisions. We are allowed to do anything we want to within this scope. We have to ask someone else if we need to change something outside this scope.",
					"",
					"Example charter:",
					"",
					"* *Working agreements*",
					"** Everyone will be in the office from 9-4",
					"** Standup is at 10",
					"** We agree to make all decisions by consent unless we have explicitly chosen otherwise for a specific decision",
					"* *Simple rules*",
					"** If you are neither learning nor contributing, then go somewhere you can",
					"** Care and feed the team",
					"** First be disciplined, then be awesome",
					"** Be transparent, open, and honest",
					"** When you see a problem, fix the system that caused it.",
					"* *Values*",
					"** We trust each other",
					"** Work of all specialties is equal in status, value, and complexity",
					"** 95% of any person's behavior and results is due to the system in which they find themselves, not the person",
					"* *Aim*",
					"** Reduce bugs written, across all teams in the company, by 95%",
					"** Find a product like {our current vision} for which there is a market, or demonstrate that one does not exist",
					"** Expand {our service} to {adjacent market segment}, earning at least $xxx in revenue from that segment per month",
					"* *Scope*",
					"** No more than 10 people",
					"** The team must be profitable on revenues from its own products",
					"** Must participate in quarterly budgeting",
					"** The team is not allowed to do its own hiring and firing, but is expected to grow its people.",
					"",
					"Optimally, a team has one Aim, as few Scope constraints as possible, and as many values, simple rules, and working agreements as it needs right now.",
					"",
					"The charter is always kept up to date. Items are retired as soon as they are no longer useful. They are also retired if team behavior does not match the agreement: the charter describes what we do, not what we wish we did.",
					"",
					"A charter MUST always have a working agreement about how the team will make decisions. This MUST cover the conditions required to make a decision valid (such as what constitutes quorum) and the kinds of agreement that constitute binding decisions (tradition, authority, simple majority democracy, consent, or consensus).",
					"",
					"A charter SHOULD have a set of working agreements about the schedule. My team should be explicit about its schedule assumptions.",
					"",
					"h2. How it helps",
					"",
					"* Making agreements explicit allows them to be changed. Retrospectives often update working agreements.",
					"* Writing a charter together helps bring a team together.",
					"* Reinforces the team's identity.",
					"",
					"h2. Mindshifts",
					"",
					"TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"h1. Acquiring the skill",
					"",
					"You just need to get an initial charter in place.",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Perform an initial chartering session. Schedule 2 hours and pick a facilitator. Then do something like:",
					"",
					"# Find common ground",
					"## Ask each person: remember the best working or team experience you have ever had. Just remember and picture that team.",
					"## Go around the team. Each person state two characteristics that made that experience awesome. Write them down.",
					"## Go around again. Each person pick one item from the list that is not yours. Build on or extend it in some way.",
					"## Ask: does anyone see any commonalities? Circle or write those. Ask: do each of us want to dedicate yourself to ensuring that this team expresses those traits?",
					"# Define parts of a charter; give examples.",
					"# Decide how we will make decisions.",
					"#* Define the possible decision-making mechanisms if necessary.",
					"#* Record this as the team's first working agreement.",
					"# Invite the team members to propose additional charter components.",
					"#* Invite them to farm the list created at the beginning. This will mostly generate simple rules and perhaps a value or two.",
					"#* Invite them to remember problems they've had before and see if they can make a working agreement that would fix that.",
					"#* Use your agreed decision-making process to agree to each one.",
					"#* Do not expect to \"finish.\" In particular, it can often take months before a team's true values become apparent.",
					"# Define the team's Aim.",
					"## Bring in the person who sponsored the team (usually a manager).",
					"## Sponsor describes his aspirations for the team.",
					"## Team proposes Aims one at a time. Agree to each within the team using the agreed decision-making process. Sponsor is silent.",
					"## After team agrees, sponsor can ratify or veto (but cannot modify). If sponsor vetoes, he can state why he vetoed but cannot propose a change that would make him happy.",
					"## Team chooses when to stop. Can then ask sponsor if he still wants to sponsor the team given that Aim.",
					"# Define the team's Scope.",
					"## Keep sponsor present.",
					"## Sponsor states any scope restrictions he is aware of. Write them down.",
					"## Team can ask questions or posit additional constraints. Sponsor decides which are real scope constraints. Team cannot veto, but can ask for clarification and for reasons.",
					"# Choose whether to launch the team.",
					"#* Team decides whether it wants to commit to attempting to achieve the Aim while operating within this Scope. If not, then Scope and Aim must be renegotiated before team can form.",
					"",
					"h1. Attaining fluency",
					"",
					"The team modifies its charter any time its circumstances change. It always lives according to the current charter; the current charter is always a good representation of what matters to the team.",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Post the charter publicly.",
					"",
					"Review it regularly. Every few days at first, then every few weeks, and eventually every month or two. Increase cadence any time the team has a major change (gain or lose a member, change scope or aim, change in key stakeholder). Decrease it as the charter stabilizes once more.",
					"",
					"If you do retrospectives, then record any changed working agreements into the charter.",
					"",
					"Every day (likely at standup), pick one of your simple rules. That day, everyone on the team looks for every way they can possibly exercise that simple rule. Don't correct others for breaking the rule. Instead notice when people apply the rule and celebrate a success. See how many different ways you can find to apply that one rule by the end of the day.",
					"",
					"h2. Further resources",
					"",
					"book: Liftoff",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_RETROS": {
				"name": "Retrospectives with outcomes",
				"description": [
					"bq>. My team improves itself iteratively.",
					"",
					"h1. What this is",
					"",
					"We get the team together on a regular cadence to make things better. We solve some problems and we celebrate some successes. If we are really good, we find ways to make lucky successes become repeatable.",
					"",
					"Each time we get together, we have all the right people in the room. Any decision we make is made: this group makes decisions, not recommendations. Therefore it is critical that all people impacted by a decision be present.",
					"",
					"Our retrospectives generally consist of 4 steps:",
					"",
					"# Set the stage.",
					"# Gather data.",
					"# Generate insights.",
					"# Pick actions and owners.",
					"",
					"For example, one team may use the sequence management-stated problem (set the stage), Timeline (gather data), 1-2-4-All (insights), then facilitator-assigned action items (actions). Another may use regular cadence (set stage), +/-/keep/change (gather data), then open discussion (insights), then everyone create one action item for yourself (actions). These are two instances of the same structure.",
					"",
					"Each iteration we implement our action items.",
					"",
					"h2. What it is not",
					"",
					"Many teams mistakenly do the following things and think of them as retros:",
					"",
					"* *Gather data for someone else*. The retro consists of some data gathering exercise. This data is presented to someone else (a manager or a virtual team) who will then make decisions and drive change. The team does not change itself; it just asks to be changed. This is actually the \"Post-mortem\":?stage=post_mortem process.",
					"* *Run less often than once per week*. The team waits too long between retros. Too many issues will build up between retros. The meetings take much longer. The team cannot address things in a timely fashion. People become unwilling to allow an issue to wait until next time; this makes it hard to get a decision and get something done this time.",
					"* *Don't do the action items*. If you don't execute the changes, then the retro is a waste of time. It still provides a modicum of value by letting people complain. At this point it is just a \"post-mortem\":?stage=post_mortem done during the project. Shorten it or drop it altogether--or finish the action items.",
					"* *Invite too many people*. The most common form is to invite multiple teams just because they all report to the same higher-level manager. The team doesn't all work tightly together every hour, so they all have different problems. They will be unable to make progress on important issues because they don't share the same issues.",
					"* *Invite the wrong people*. This commonly happens in functional / matrixed reporting structures. A retrospective among people who happen to share the same discipline is useless, even if they report to the same manager. Retros happen within the groups that work together tightly, which are the cross-functional teams that get stuff done.",
					"",
					"h2. How it helps",
					"",
					"The team is able to resolve its own problems. This builds team identity and empowerment: the team starts to own its own process, product, and destiny.",
					"",
					"This is a great way to update the team's charter as the team learns. It is also a great way to make progress through the stages of proficiency.",
					"",
					"h2. Mindshifts",
					"",
					"TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"h1. Acquiring the skill",
					"",
					"See Esther Derby's \"Agile Retrospectives\":http://www.slideshare.net/estherderby/agile-retrospectives-4976896 deck for a good framework. This includes one good practice for each step in the framework.",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"h2. Why these prereqs help",
					"",
					"h3. Build slack in",
					"",
					"TBD",
					"",
					"h3. Team agreement / charter",
					"",
					"TBD",
					"",
					"h3. Single-assignment teams",
					"",
					"TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Start by doing retrospectives every other day, for 30 minutes each time. Your goal isn't to solve all of your problems, but to find a couple of actions that will make things better. You will iterate and make the next set of improvements in a couple more days.",
					"",
					"It will take you a half-dozen retrospectives to really get the hang of it, no matter how long the time between them. You might as well learn fast by using a high cadence.",
					"",
					"As you gain skill, you will likely reduce frequency to once per week, and time will stay the same or reduce to 20 minutes.",
					"",
					"Do not reduce frequency to anything slower than once per week.",
					"",
					"Even if you are using iterative planning, there is no reason that your retrospective frequency must match your planning cadence. Separate them.",
					"",
					"Have the same person facilitate each of your first 3-4 retros. Retro facilitation is a skill and takes iteration to learn.",
					"",
					"The facilitator should pick the retro activities in advance. Pick one activity for gathering data. Pick another for problem solving. And make sure to allow time for making action items. Write an agenda with timings so that you can avoid getting stuck in rat holes.",
					"",
					"h1. Attaining fluency",
					"",
					"When you are fluent, you will never miss a retro. Your retros will keep on agenda throughout. The action items will help with the issues discussed and will get completed soon after the meeting.",
					"",
					"Everyone on your team will be able to facilitate the retro for your team.",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Rotate the retro facilitator. Everyone on the team should have a chance to facilitate a couple of retros. People will learn from watching each other, but have to do it at least 2 times to really get it.",
					"",
					"Try a variety of techniques for each part of the agenda. Different ones will result in different types of discussion. Pick techniques from the resources below.",
					"",
					"The key skill to learn is meeting facilitation. The facilitator is not a leader. He should not be strongly present in the meeting. If he has a strong opinion, he should hand over facilitation temporarily to someone who is not involved.",
					"",
					"Much of facilitation involves making sure everyone is heard and that conversations don't spiral into a narrow topic that is only interesting to a couple of members. One good technique to avoid this problem is conversation fingers.",
					"",
					"Another good structure to try is Lean Coffee. This will generally result in a broader discussion with less focus in any one area. Use it when that is useful.",
					"",
					"h2. Further resources",
					"",
					"book: Retrospectives",
					"",
					"book: Innovation Games",
					"",
					"\"Agile Retrospectives deck\":http://www.slideshare.net/estherderby/agile-retrospectives-4976896",
					"",
					"\"Liberating Structures\":http://www.liberatingstructures.com/ls-menu/",
					"",
					"\"Use gestures to facilitate conversation flow\":http://facilitationpatterns.org/patterns/use_gestures",
					"",
					"\"Lean Coffee\":http://leancoffee.org/",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SHARED_CODE": {
				"name": "Shared task responsibility",
				"description": [
					"bq>. We are accountable as a team. No task is owned by an individual.",
					"",
					"h1. What this is",
					"",
					"Any task which produces our work output is shared. If it succeeds we all succeed. If it fails we all fail. No one person on the team will be judged differently than the team overall.",
					"",
					"This is full team accountability, not a lack of accountability. If a task does not get done, then all of us have failed. We all take the full measure of blame.",
					"",
					"We therefore have some way of tracking and viewing all of the work.",
					"",
					"h2. How it helps",
					"",
					"By sharing responsibility for the outcome of all tasks, the team can now find more effective and creative ways to get the work done.",
					"",
					"h2. Mindshifts",
					"",
					"The largest mindshift is away from individual accountability.",
					"",
					"The prevalence of individual accountability arises because of our misuse of the word \"team\". Once we have single-assignment, small teams, we create the opportunity to move away from individual accountability. Here's how it works.",
					"",
					"Most companies are organized such that real teams can't form. Therefore they are populated by work groups which then get called teams, because few people have ever actually seen a real team. One of the biggest differences between a work group and a team is how they take on work.",
					"",
					"* Members of a work group succeed or fail independently. It is in each person's best interests to complete their own tasks, even if someone else won't. Individuals avoid taking on group work. Therefore, anything assigned to the group as a whole will simply be ignored by everyone in the group.",
					"",
					"* Members of a team succeed or fail together. It is in each person's best interests to ensure that all the most important work is done and the team overall makes as good of progress as is possible. Individuals seek opportunities to help the team succeed, taking on whatever work will most help attain the shared end. Therefore, anything assigned to the group as a whole will get the full attention of everyone on the team and anything assigned to an individual will be seen as a distraction from the important work of the team.",
					"",
					"As groups of people shift from being work groups to being teams, they need to shift how they assign work. All important work must be assigned to the team as a whole, or it will be a distraction. However, tasks could still be executed individually. The responsibility is at the team level, and the team can change who executes a task, regardless of the number of individuals involved in actual execution.",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SYSTEMS_THINKING": {
				"name": "Understand and optimize systems",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_LOCAL_REFACTORING": {
				"name": "Local transform-based refactoring",
				"description": [
					"bq>. We can execute local, named transformations on our code. Rather than typing edits within a function, we execute transforms.",
					"",
					"h1. What this is",
					"",
					"There are a set of code transformations that can be guaranteed to change code without altering its behaviors. They have names. Tools perform these transformations with guaranteed safety.",
					"",
					"The important refactorings to learn first are:",
					"",
					"# Extract method.",
					"# Introduce variable.",
					"# Introduce parameter.",
					"# Introduce field.",
					"# Inline {anything}.",
					"# Rename {anything}.",
					"",
					"We can execute these 6 refactorings using an automated tool. Each takes less than 5 seconds to perform and requires no conscious thought.",
					"",
					"Additionally, refactoring tools analyze your code and make suggestions. Following these suggestions helps you avoid techniques that cause bugs. So we also learn:",
					"",
					"# Watch for suggestion.",
					"# Apply auto-fix.",
					"",
					"h2. How it helps",
					"",
					"We can make simple, local changes to our code without introducing errors or having to think. This raises the level of abstraction in our editing, making it easier to keep slightly more complex changes in mind at once.",
					"",
					"Both of these effects reduce the probability of introducing bugs when editing code.",
					"",
					"Auto-fixes allow us to learn better techniques for writing specific coding constructs. They also decrease the amount of code we have to write. With time we learn to lean on the tool. We write just enough that it can figure out our intent and give the right suggestion. Then we apply the auto-fix to write the final code. Coding is faster and more accurate.",
					"",
					"h2. Mindshifts",
					"",
					"While typing new code is OK, editing existing code is not. Instead, use the editor to transform the code in known-safe ways.",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"h1. Acquiring the skill",
					"",
					"Basic levels of this skill allow you to perform refactorings with labor. You will have to use menu navigation and memory aids to remember what is possible and to execute it.",
					"",
					"h2. Recipes to follow",
					"",
					"Grab a copy of the cheat sheet for your refactoring tool. Print it and tape it to your screen.",
					"",
					"Each tool offers suggestions about refactorings it can do in a particular context. Find out how your tool offers these suggestions (for example, this is @Ctrl+Shift+R@ in ReSharper). Find out where it shows you the hot key to use for each refactoring.",
					"",
					"When editing code, keep the list of refactorings in front of you. Rather than just editing code, ask yourself whether you are trying to do any of the refactorings. If so, use the tool instead of typing the code--even if that feels silly and slow.",
					"",
					"Find how your tool makes suggestions and how you apply auto-fixes for those suggestions. This may be in-line in the editor or in a separate window.",
					"",
					"h1. Attaining fluency",
					"",
					"Fluency is all about how quickly you can perform these refactorings and how little you think about the refactoring while doing so.",
					"",
					"You should be able to perform every refactoring without using a mouse or menu (using only hot keys).",
					"",
					"You should no longer write all of your code. you will write just enough that the tool can figure out what you meant and fill in the details for you.",
					"",
					"h2. Measuring proficiency",
					"",
					"Proficiency is the number of refactorings that you can perform without conscious thought.",
					"",
					"h2. Recipes to follow",
					"",
					"Each day, pick one refactoring to make fluent. Look up its hot key (on the sheet or via menus). Use it at least 50 times that day. Find excuses if necessary. You are trying to train finger memory.",
					"",
					"Make sure to continue to use refactorings from previous days as well. Otherwise you will lose them as you add new ones.",
					"",
					"Pick one file and make it \"ReSharper clean.\" Address every suggestion. Apply auto-fixes to most of them. You should not disable many suggestions.",
					"",
					"Experiment with partial lines of code. How little can you write such that the tool suggests the rest of the line? Hint: in modern OO and procedural languages, type and expression constraints tend to flow from right to left in a statement. If you fill in the right side, the computer can often fill in the left.",
					"",
					"Practice a simple code kata, such as Bob Martin's \"Prime Factors Kata\":http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata, once or twice a day.  Challenge yourself to complete the kata without touching the mouse and even minimizing keystrokes.  Time your end-to-end kata duration, and strive to break your record. ",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_AUTO_DEV_TEST": {
				"name": "Automated developer testing",
				"description": [
					"bq>. The people who make mistakes are responsible for finding those mistakes. This lets us learn; we don't repeat mistakes.",
					"",
					"h1. What this is",
					"",
					"On my team, we are required not just to deliver a product, but to deliver a working product. This means shipping a product and evidence that the product behaves as the developer intended.",
					"",
					"No code is considered done until it has been proven. We are starting to apply this thinking to our other work as well, especially habit changes from retros. The call *Prove it!* starts to ring around the halls.",
					"",
					"When we say 'Prove it', however, we currently mean just to prove that you are done and didn't break anything. We don't yet have the maturity to prove whether what we did matters.",
					"",
					"h2. What it is not",
					"",
					"This is *not*:",
					"",
					"* *Test first*. Test may be written before or after.",
					"* *Unit testing*. The code probably doesn't have any units, so the tests are probably all some kind of integration: component or full-system tests.",
					"* *Red/Green/Refactor*. The team doesn't yet have the refactoring skills to make this work yet. They can't do either the fast red, fast green or refactor steps.",
					"* *Emergent design*. Again, the team can't refactor. So designs have to remain predictive.",
					"* *TDD*. Tests are just about validation after the design (and probably code) is set, so they don't drive anything.",
					"* *Acceptance testing*. These tests verify the code did as the developer intended--including the high-level scenario. However, the developer may be wrong about what the customer needed.",
					"",
					"Automated developer testing is required to get to any of these. So are other things.",
					"",
					"h2. How it helps",
					"",
					"We stop digging ourselves deeper. We find bugs earlier and can fix them before they impact others. Our legacy code will stop rotting as quickly.",
					"",
					"We get our outer-most development feedback loop in place. We are able to start seeing the mistakes we make, which means we can start trying to find ways to address them.",
					"",
					"h2. Mindshifts",
					"",
					"* Prove it!",
					"* You're not done until you're done-done.",
					"* Correctness, internal quality, and discipline are the root of success.",
					"",
					"h2. Measuring impact",
					"",
					"If you are doing this well, you should see improvements in:",
					"",
					"* Defects found after dev declares done.",
					"",
					"You may also see:",
					"",
					"* Stabilization time decreases.",
					"* Live site issues go down.",
					"",
					"These are only guaranteed once you get to Test Units.",
					"",
					"h2. Side effects",
					"",
					"Development takes longer to get to code complete (typically about +40%). This can be addressed by Pair / Mob for productivity and by Tests as Specs.",
					"",
					"h1. Acquiring the skill",
					"",
					"The main thing is to have developers start writing tests and give them the time / safety to do so.",
					"",
					"You cannot have part of your team do automated testing while part does not. If you do, your results will be as if no one was doing automated testing _and_ you will frustrate those who are trying to improve.",
					"",
					"It doesn't matter what tests you write, how much of the code you cover, how good the tests are, or when you write them. Those are all things that we can fix later. For now, we just need to get in the habit of not trusting something until there is a test that shows it behaves as intended by its creator.",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Just write automated tests. The hard part with this level is just getting started. So encourage that, no matter how \"bad\" the test.",
					"",
					"Min requirement for a test:",
					"",
					"* Must be written in our team's dev auto test framework (xUnit family, etc). It will run whenever I execute the \"run all tests\" command.",
					"* Must be self-verifying. Has a binary pass/fail result.",
					"* Must be deterministic. Always succeeds or always fails, depending only on the product code.",
					"* Verifies some aspect of the product that we care about.",
					"* Checked in with the same commit as the code it tests.",
					"",
					"Non-requirements:",
					"* Don't care how much code it executes nor how much of that it verifies.",
					"* Don't care if you wrote it before or after the code, as long as they are checked in together.",
					"* Don't care if you test all aspects of a code change.",
					"",
					"To help your team, celebrate any success. In code review, publicly notice any commit that includes at least one test for some code that changed. Really celebrate anyone who is giving an honest effort to test their changes well.",
					"",
					"Writing tests in this manner will take more time than writing a feature without any tests. We are pulling forward some of the find and fix bugs time from the stabilization phase into coding. This decreases total development time before release, but it makes each feature take longer to get to integration.",
					"",
					"Increase each feature's schedule by about 40% to account for this. Go ahead an take this time out of stabilization; you should not need to move the final ship date. You are just moving code complete date to be closer to ship.",
					"",
					"This adds schedule risk. It will make planners uncomfortable. Make sure they see that the testing and stabilization is happening: you are removing total product risk by fixing bugs earlier.",
					"",
					"Management can, and should, make it safer to write tests than to not write tests. Do  the following:",
					"",
					"* Build slack in. Don't harp on schedules. State a clear expectation that quality matters and we will hit our target date by adjusting scope.",
					"* Reduce team stress. Don't drive the team. When people are hurried, they revert to old practices and don't try new things. Every new thing slows you down at first.",
					"* Don't start all work at once. You want to be able to drop lower-priority features if you run out of time. So wait to start them until you have finished (done-done) the higher priority features and know you will have time.",
					"",
					"h1. Attaining fluency",
					"",
					"Fluency in this proficiency is simple: 100% of check-ins modify tests in some way. We aren't refactoring yet, so every check-in changes product behavior. Therefore it should change tests.",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Ensure that everyone on the team is writing these tests and running them. If any one person does not run the tests, they will constantly break the tests. This will cause frustration and delays. It can easily stop a team from pursuing this practice or cause the best members of your team to leave.",
					"",
					"Most people will only run the tests if they see the value in doing so. They will see the value if they write tests in the suite: if some of the tests are theirs. Therefore everyone must write tests.",
					"",
					"Management expectations can also help make it safe to change:",
					"",
					"* Catch people succeeding. Celebrate successes. When someone partially succeeds, point out the part they did well, not the part they did poorly. Someone else will do the other part well, and you can celebrate it then.",
					"* Make sure there are some individual contributor champions. These are the people who will actually drive the changes. ICs learn from ICs. Give them extra time to help others. Celebrate this work.",
					"* Reward the team for shipping features. However, only reward known-working features. Count a feature only when the dev who wrote it also delivers proof that it will not generate a bug tail over time.",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_VERT_DECOMP": {
				"name": "Decompose work vertically (by value)",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_PULL": {
				"name": "Apply pull systems and queues",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_PAIR_REGULARLY": {
				"name": "Work together to learn",
				"description": [
					"bq>. We spend part of each day doing our normal work together in pairs or mobs. This teaches us stuff we didn't know we didn't know.",
					"",
					"h1. What this is",
					"",
					"Learning is part of our jobs. We can learn from each other. On the job learning transmits more ideas than formal learning. Therefore we spend part of each day doing our normal work together.",
					"",
					"We work in pairs or in mobs to spread knowledge:",
					"",
					"* *Pairs*: 2 people sitting at one computer, doing work. At any given moment one person is typing. But the thinking happens in a running dialogue between the partners.",
					"* *Mobs*: One computer per team. The whole team works on one thing at a time. There is one typist at a time. He does not think: he just takes dictation. The rest of the mob decides what to do and issues commands.",
					"",
					"We use these techniques to learn, but not (yet) to do most of our work. We schedule 1-2 hours per day for pairing or mobbing. We also continue to do work individually.",
					"",
					"h2. How it helps",
					"",
					"Although it seems woefully inefficient, these ways of working sacrifice data entry speed and increase the number of insights each person hears per hour. Each person is exposed to more new ideas per hour, so has more learning opportunities. Ideas move much more rapidly around the team than in any method in which the work is executed individually.",
					"",
					"Most problem solving or invention work is constrained by the speed of learning or of invention, not the speed of data entry. In these cases learning faster reduces the cost of development.",
					"",
					"Even when the development cost goes up, working together decreases latency.",
					"",
					"Each task takes less calendar time to complete. Each task takes some number of insights to finish. More people increases the number of insights applied to that task per hour. Simply: the pair or mob is less likely to be stumped for long.",
					"",
					"Although we do not use this technique for all of our work, we gain from it even with our individual work. We learn things and apply them to the rest of our jobs.",
					"",
					"The working together sessions also help us build alignment. We come to agreements on details, so our individual work is much more likely to come together well.",
					"",
					"h2. Mindshifts",
					"",
					"* It is OK to work together.",
					"* Learning is the constraining resource.",
					"* Effectiveness is more important than efficiency.",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"h1. Acquiring the skill",
					"",
					"Note: many teams actually find it easier to skip this level and just pair for productivity. This level involves working in 2 different ways simultaneously, while that has only one way to work. However, starting with this level can allow a team to get started even if shared work is risky.",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Do the following:",
					"",
					"# Get agreement. Make sure 100% of the people involved are willing to change the way they work in order to learn faster.",
					"# Review likely early downsides. Make sure 100% of those involved are aware and ready to deal with the problems they will encounter during learning.",
					"# Set up a regular time to pair. Put it on everyone's calendars as a fixed meeting. Everyone has it at the same time.",
					"# Agree how you will pick pair partners. Rotating schedule? Within role or across role? People select their partner?",
					"# Make the pairings and tasks visible. Optimally sit together. At a minimum, create a big board that lists who is working on what. Everyone--whether on the team or not--should be able to see who is pairing.",
					"# Just get started. Expect problems. You will deal with them along the way.",
					"",
					"Traps to avoid:",
					"",
					"* Don't pair with the same person for more than 2 sessions in a row. Usually pick a new person each session (each day).",
					"* Don't try this without retrospectives in place. We really mean it. Pairing exposes problems in days that otherwise take months to see. You need a good way to deal with the problems you find.",
					"",
					"Consider running this as an experiment. Better yet, consider running the experiment described in working together for productivity instead. It is an easier experiment to run, assuming you can get permission to run it.",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_AUTO_BUILD_VERIFY": {
				"name": "Automated build verification",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_LIMIT_WIP": {
				"name": "Limit WIP to uncover problems",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_ACTION_RETROS": {
				"name": "Iterative team improvement",
				"description": [
					"bq>. My team makes one small, intentional improvement every 2-5 days. Small gains accrue over time to give big results.",
					"",
					"h1. What it is",
					"",
					"My team owns its own improvement. We improve via iterative experiments. We are always running an experiment, but each one is short. This maximizes the amount we can learn.",
					"",
					"We do not expect all possible changes to work. So we try things, measure results, and make habits out of the changes that give good outcomes.",
					"",
					"Although the most important part of the process is the experiments, we do need to agree, as a team, about what experiment to run. We achieve this agreement by a particular form of retrospective.",
					"",
					"Each iteration of the process follows this sequence:",
					"",
					"# Gather data.",
					"# Pick something to address (systematic problem to fix or lucky win to make systematic). This is your objective.",
					"# Root cause analysis (if a problem) or contributing factor analysis (if a lucky win).",
					"# Solution ideation.",
					"# Pick one to try. This is your activity.",
					"# Define measures (1 measure of whether you implemented the activity + 1 measure of how it impacted your objective). This defines your experiment.",
					"# Run the experiment. Gather data as you go.",
					"# Assess results.",
					"# Decide whether to enact new thing as a change.",
					"",
					"h2. How it helps",
					"",
					"First, the focus on experimentation allows the team to try new stuff even when people think it might not work. We can try out several potentially good ideas and choose the one that works best for us in practice.",
					"",
					"Second, the short experiment cycle forces us to make small experiments. This helps us verify one piece of understanding at a time. It reduces the risk: if our experiment breaks things, we will only experience those problems for 2 days.",
					"",
					"Most importantly, the short cycle time allows us to focus on one thing at a time. If something ends up being the second-most important item, it will come up again in 2 days. We can deal with it then. We focus on locking in one gain on our most important problem. Every 2 days. Then we repeat.",
					"",
					"h2. Mindshifts",
					"",
					"Most mindshifts impact the team:",
					"",
					"* We own our destiny. Our process, product, and people are our own.",
					"* Stop making suggestions; start making decisions.",
					"* Big bets cause high risk with moderate return. Bit improvements come from small steps.",
					"* None of us has the right answer. We have ideas worth experiments.",
					"* There is no such thing as a failed experiment unless it gives no result. Any outcome is of equal value to any other. Optimizing our process happens by choosing which experiments to adopt as changes.",
					"* Work to improve your team's effectiveness is valuable work. Do it and celebrate it.",
					"",
					"A few also apply to change agents (Scrum masters, management, consultants, PMOs):",
					"",
					"* The change agent does not have the answer. Good change agents help teams see what objectives are possible, then get out of the way.",
					"* Nurture your team's ability to apply its intelligence, rather than your ability to solve problems.",
					"* Don't unify activity from team to team. Raise bar on objectives; local variation is an evolutionary advantage.",
					"* Expect to spend time and effort on improvement via this process (and others). Budget accordingly.",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"Keep your process improvement cycle to 2 days unless your sprint cadence is faster. Even for a faster planning / delivery cadence, you might consider keeping the improvement cadence at 2 days.",
					"",
					"Slower than 2 days makes it take longer to learn. It also makes it hard to pick one thing to do and to focus on small changes that are within your power to enact.",
					"",
					"Faster than 2 days can make it feel like you spend all your time in process improvement meetings, rather than getting work done.",
					"",
					"If you do this every 2 days, expect your retrospective to take 45 minutes. This is long enough to get all the way through experiment design--just barely. Make sure not to squander time in data analysis or choosing the right thing. You will get another attempt in 2 days.",
					"",
					"If you do this at a longer cadence, expect the amount of meeting time to scale linearly with the frequency. Weekly retros that result in real process changes take a bit over 90 minutes. So you might as well keep it shorter and learn faster.",
					"",
					"Make sure all the right people are in the room, just as you would for any other retro activity. Even more than with outcome-based retros, this process results in real change decisions and experiment definitions happening every time. You cannot afford for these to become recommendations.",
					"",
					"Never run more than one experiment at a time. Consider running no experiments if you are trying to adopt a challenging habit. You want to focus the whole team on one thing, then build on it. Make sure not to accrue any process debt: things we say we do, but don't really do, or do only with continual, conscious effort.",
					"",
					"For each step of the process, pick one activity to facilitate that step. An example would be:",
					"",
					"# Gather data (+/-/?, 10 min)",
					"# Pick objective (dot vote, 2 min)",
					"# Root cause (fishbone diagram, 10 min)",
					"# Pick area (circle vote, 2 min)",
					"# Solution generation (1-2-4-all, 10 min)",
					"# Pick activity (dot vote, 2 min)",
					"# Define measures (open discussion + thumb vote, 8 min)",
					"# Run experiment (as per the experiment; measure data several times during the period)",
					"# Assess results (read before + two words + thumb vote, 2 min)",
					"",
					"Many books contain alternative activity ideas for data gathering. Examples include timeline, pile of stickies, and mind map.",
					"",
					"There are also good techniques for root cause analysis, such as 5 whys, mind map, and speedboat.",
					"",
					"h1. Attaining fluency",
					"",
					"You are fluent when your team runs an experiment every time period and those experiments are always implemented (according to their measure of implementation). They may or may not have the desired impact, but the team always gets data.",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"h2. Recipes to follow",
					"",
					"As your fluency improves, you might consider slowing down your cadence to weekly. This can allow experiments that take longer to observe results. However, it can also just weaken discipline and allow the team to stop making as good of experiments.",
					"",
					"Do not slow the cadence below weekly. Any cycle time longer than 1 week simply places too much at risk. If the experiment doesn't work out, then the loss is too high. So you have to do conservative experiments.",
					"",
					"Furthermore, you don't get to run as many per year, so you start needing to run multiple in parallel. This results in a division of focus and a lower percentage of experiments actually getting run.",
					"",
					"Avoid all of these problems by keep your cadence to no slower than weekly. Every other day remains a healthy cadence in perpetuity.",
					"",
					"Some teams do after-action improvements after any significant problem. Even if your team starts doing this, keep up your regular iterative improvements. The two find different kinds of things.",
					"",
					"Most teams start by focusing on their problems. This is a great way to start, but you need to go further to attain fluency. Pick a series of experiments where you will only work on lucky wins that you want to make systemic. Look at building a system that reinforces the things you want to have happen.",
					"",
					"Teams that only practice fixing problems can develop codependency: they get really good at creating and fixing problems. Avoid this by focusing on things that went well and how you can make them more likely to recur.",
					"",
					"h2. Further resources",
					"",
					"Book: Retrospectives, by Diana Larsen",
					"",
					"Book: Innovation games",
					"",
					"",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_T_SHAPED": {
				"name": "T-shaped people",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_DRY": {
				"name": "Don't repeat yourself",
				"description": [
					"bq>. Each piece of knowledge should be expressed in exactly one place. ",
					"",
					"h1. What this is",
					"",
					"TBD",
					"",
					"h2. How it helps",
					"",
					"TBD",
					"",
					"h2. Mindshifts",
					"",
					"TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"* \"DRY in Pragmatic Programmer (book)\":http://pragmatictips.com/11",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_READ_BY_REFACTORING": {
				"name": "Naming as a process / Safely modify legacy code",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TEST_FIRST": {
				"name": "Test as spec",
				"description": [
					"bq>. The most detailed form of my spec is the set of automated tests. The tests are the spec for the code.",
					"",
					"h1. What this is",
					"",
					"I treat my tests as my detailed spec. As they are a spec, aspects of good specifications apply.",
					"",
					"The tests:",
					"",
					"* SHOULD be written before the code,",
					"* MAY be extracted from legacy code if the spec is lost (or was never written),",
					"* MUST NOT overspecify (specify any behavior beyond the intent),",
					"* SHOULD NOT specify the same thing in multiple places (be duplicitive),",
					"* SHOULD NOT be ambiguous in either intent or verification,",
					"* MAY underspecify if necessary,",
					"* MUST be legible (intended to be read more often than written),",
					"* and SHOULD provide tracability (point directly at the code they specify).",
					"",
					"h2. How it helps",
					"",
					"TBD",
					"",
					"h2. Mindshifts",
					"",
					"TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"h2. Why these prereqs help",
					"",
					"h3. Automated developer testing",
					"",
					"The spec requires constant maintenance as the code changes. This will only happen if the whole team of developers is creating and running tests constantly. Any test suite maintained by a third party will fall out of date, preventing its use as a spec.",
					"",
					"h3. Work together to learn",
					"",
					"Learning to write clear specifications in test form takes time and effort. This is greatly reduced if the team members work together to transfer knowledge around the team.",
					"",
					"This is especially true if cross-role sharing happens. Developers, testers, product managers, operations people, and customer support people all have different understandings of specs and provide different insights about how to make a useful spec.",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_COLLECTIVE_OWNERSHIP": {
				"name": "Collective ownership",
				"description": [
					"bq>. Anyone in the team can make changes and improve the code base",
					"",
					"h1. What this is",
					"",
					"Collective code ownership is a practice described in *Extreme Programming*. In the second edition of Extreme Programming it was renamed to Shared Code while maintaining the same meaning: the code base is owned by the whole team and anyone can make changes to it and is encouraged to contribute with new ideas to all segments of the project on which the team works, thus any developer can edit any line of code to add functionality, fix bugs and perform refactoring.",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"\"Martin Fowler on Code Ownership\":https://martinfowler.com/bliki/CodeOwnership.html",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_WRITE_UNITS": {
				"name": "Code in small, testable units",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_DONE_DEFINITION": {
				"name": "Done definition",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_AUTO_DEPLOY": {
				"name": "Automated deploy",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_LEARN_LOCALLY": {
				"name": "Learn from local cmm'ty",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_PAIR_PRODUCTION": {
				"name": "Pair / Mob for productivity",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_ITERATION": {
				"name": "Do things in iterations",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_PAIR_ALWAYS": {
				"name": "Pair / Mob for discipline",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TEST_UNITS": {
				"name": "Fast, consistent automated tests",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_STORIES": {
				"name": "Stories",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_BUG_FREE_NEW_CODE": {
				"name": "No new bugs in new code",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_REFLECTIVE_DESIGN": {
				"name": "Reflective design",
				"description": [
					"bq>. I do my design work when I read code, not when I write it.",
					"",
					"h1. What this is",
					"",
					"Reflective design is the technique of looking for insights in the code and asking it how it would like to have been designed, then updating the design to match. Where predictive design happens when code is written, reflective design happens when code is read.",
					"",
					"h2. Why this is useful",
					"",
					"When you are first writing code, you know a lot about your currently-intended solution. But you gain knowledge about the problem between the moment you first write code and when you later read it. You get better designs when you know the problem better. You also tend to get simpler designs when you are less sure of your particular solution.",
					"",
					"Thus, reflective design results in simpler designs which are built with greater knowledge of the problem domain.",
					"",
					"In addition, reflective design only happens when you read code. Any system has a fair amount of code which is written and then never (or rarely) modified. It isn't worth designing those parts carefully. If you improve the design a little (but not completely) every time you read it, then you will spend the most design time on the parts off the solution that turn out to be read most often. And those are exactly the parts where good design pays the highest benefit.",
					"",
					"h1. Examples",
					"",
					"It might be interesting to look at some examples. ",
					"",
					"I poked around on GitHub and found this @if/elseif/elseif@ in a method called \"@ImportProject@\":https://github.com/mono/MonoGame/blob/25578d0d8f4b5c0dcaec1e58f6df3c3016515b1e/Tools/Pipeline/Common/PipelineProjectParser.cs#L374",
					"",
					"I've never read this code before, and don't really know what it does, but I my design sense suggests extracting three methods from the bodies of these blocks. The result would look something like this:",
					"",
					"bc.. if (buildAction.Equals(\"Reference\"))",
					"{",
					"  ImportProject_BuildAction_Reference(...);",
					"}",
					"else if (buildAction.Equals(\"Content\") || buildAction.Equals(\"None\"))",
					"{",
					"  ImportProject_BuildAction_ContentOrNone(...);",
					"}",
					"else if (buildAction.Equals(\"Compile\"))",
					"{",
					"  ImportProject_BuildAction_Compile(...);",
					"}",
					"",
					"p. This is an example of the \"None->Honest naming transition\":http://arlobelshee.com/tag/naming-is-a-process/. ",
					"",
					"It's Reflective Design because someone wrote it one way, and then the need for those three methods became visible. ",
					"",
					"I'm looking at the @ReadInclude*@ methods and noticing that they are each used exactly once and have a lot of @out@ parameters, which means they may not be the right methods. And they also have a lot of code in common. So I want to look for a way to extract the commonality of those methods in to a new place (eventually a new class), and the inline what is left. There are plenty more refactorings that want to be applied here, but that's fine for now: my goal is not Good, it's Better (fast). ",
					"",
					"Someone doing **Predictive Design** when first writing this code might have thought \"I bet there are multiple behaviors here and each has some complexity. I'll use Strategy Pattern.\":",
					"",
					"bc.. ProjectImporter.GetStrategy(buildAction)",
					"\t               .Import(...);",
					"",
					"abstract class ProjectImporter",
					"{",
					"\tProjectImporter GetStrategy(string buildAction)",
					"\t{",
					"\t\tvar type = this.GetNestedTypes.SingleOrDefault(_ => _.Name == buildAction) ?? typeof(Nop);",
					"\t\treturn (ProjectImporter) Activator.CreateInstance(type);",
					"\t}",
					"",
					"\tabstract void Import(...);",
					"}",
					"",
					"class Reference : ProjectImporter",
					"{",
					"",
					"}",
					"",
					"p. Is the predictive result better? We can't know, because we are not yet reading it. But we sure did add a lot of complexity before we knew we needed it!",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_FAST_BUILD_VERIFY": {
				"name": "Fast build verification",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TRACK_CAPACITY": {
				"name": "Track progress against plan",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_LEARN_ALL": {
				"name": "Learn from everyone",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_PROCESS_EXPERIMENTS": {
				"name": "Process experiments",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_LEARN_VS_PROVE": {
				"name": "Learning / proving distinction",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TEST_BEYOND_CORRECT": {
				"name": "Test beyond correctness",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_FAST_AUTO_DEPLOY": {
				"name": "Sustainable automated deploy",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_STORY_CLUSTERING": {
				"name": "Story clustering",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_ADAPTIVE_PLANNING": {
				"name": "Iterative planning",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_RELATIVE_ESTIMATES": {
				"name": "Relative based estimation",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_LIMIT_WORK_TO_CAPACITY": {
				"name": "Limit work to estimated capacity",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_CONTINUOUS_PLAN": {
				"name": "Continuous-form planning",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SESSION_MANUAL_TESTING": {
				"name": "Session-based manual testing",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_ROLLING_WAVE_PLANNING": {
				"name": "Rolling-wave planning",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_BUG_RATCHET": {
				"name": "Bugs decrease over time",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_IMPROVING_PROOF": {
				"name": "Improving levels of proof",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TEST_LEGACY": {
				"name": "Legacy code under test",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_RGR": {
				"name": "Rapid coding inner loop (R-G-R)",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_AUTO_DEPLOY_VERIFY": {
				"name": "Automated deploy verification",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_VERIFY_EXAMPLES": {
				"name": "Verify examples (ATDD)",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_DATA_DRIVEN_CAPACITY": {
				"name": "Use data to determine capacity",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_FIX_LEGACY": {
				"name": "Pay down technical debt",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SIMUL_PHASES": {
				"name": "Simultaneous Phases",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_CLEAN_CODE": {
				"name": "Clean code",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_INTENTIONAL_TECHNICAL_DEBT": {
				"name": "Intentional Technical Debt",
				"description": [
					"bq>. We can occasionally defer refactoring and will come back to it before long.",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SHORT_TERM_RELIABILITY": {
				"name": "Reliable short-term commitments",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_M_SHAPED": {
				"name": "M-shaped people",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_EVO_DESIGN": {
				"name": "Evolutionary Design",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_FEATURE_ISOLATION": {
				"name": "Feature isolation",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_AUTO_ROLLBACK": {
				"name": "Automated rollback",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_HYPOTHESIS_STORIES": {
				"name": "Hypothesis stories",
				"description": [
					"bq>. Treat development as a series of experiments, where each experiment tests a hypothesis.",
					"",
					"h1. What this is",
					"",
					"Hypothesis stories model the development of new ideas, products and services&mdash;even organizational changes&mdash;as series of experiments to determine whether an expected outcome will be achieved. Each experiment is iterated upon until it proves or disproves its hypothesis.",
					"",
					"h2. How it helps",
					"",
					"Hypothesis stories facilitate experimentation, testing, and validated learning as primary measures of progress. It accelerates innovation, reduces development costs, and increases confidence in delivered solutions.",
					"",
					"h2. Mindshifts",
					"",
					"View each proposed solution as a hypothesis. Implement each solution by subjecting it to experiments, collecting observations to validate assumptions and understanding.",
					"",
					"h2. Measuring impact",
					"",
					"If you are doing this well, you should see improvements in:",
					"",
					"* We can more rapidly test our solutions against the problems we have identified in the products or services we are attempting to build",
					"* We can be more effective given that our learning and assumption on our progress is validated.",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"h2. Side effects",
					"",
					"* The time and scope of hypothesis story is critical, given that the team's trajectory and focus may pivot to something else at future, team may no longer have the time, resource or mind state to continue monitor for metrics.",
					"",
					"h1. Acquiring the skill",
					"",
					"To acquire the skill, first practice expressing your work as a hypothesis:",
					"",
					"bq. We believe that <this capability>",
					"Will result in <this outcome>",
					"We will know we have succeeded when <we see a measurable signal>",
					"",
					"Clearly and visibly state any assumptions you make about your hypothesis.  Then invite your team to provide further input, debate, and understanding of the circumstances under which you are performing the test. Are the assumptions valid and do they make sense from a technical and business perspective?",
					"",
					"Then, practice putting your hypothesis to the test: perform the experiment and collect measurements. The experiment is complete once the assumptions once you have measured the value of what is being delivered - in other words, once you have gathered data to validate our hypothesis.",
					"",
					"Finally, practice closing the loop with any follow-up.  For example, \"if our hypothesis proves correct, we will take action <a>, and if our hypothesis proves incorrect, we will take action <b>\"",
					" ",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h1. Attaining fluency",
					"",
					"Combining practices such as Hypothesis Stories and Continuous Delivery accelerates experimentation and amplifies validated learning.  With Continuous Experimentation, each change can be traced to its impact on key metrics.",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"\"How to implement Hypothesis-Driven Development [O'Reilly, 2014]\":https://www.thoughtworks.com/insights/blog/how-implement-hypothesis-driven-development",
					"\"Spotify Wants To Be Good at Failing [Linders, 2016]\":https://www.infoq.com/news/2016/07/spotify-good-at-failing",
					"\"Hypothesis-Driven Development [Taylor, 2011]\":http://www.drdobbs.com/architecture-and-design/hypothesis-driven-development/229000656",
					"\"Hypothesis-driven development [Cho]\":https://www.ibm.com/devops/method/content/learn/practice_hypothesis_driven_development/",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_EXPERIENCE_FOCUS": {
				"name": "Experience focus",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_PROJECTIONS": {
				"name": "Reliable long-range planning",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_UNIVERSAL_SPECIALIST": {
				"name": "Full-product specialization",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_NO_BUGS": {
				"name": "#BugsZero",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TELL_VS_ASK": {
				"name": "Universal CQRS",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_WHOLE_TEAM_BUSINESS": {
				"name": "Whole team business innovation",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SMOOTH_FLOW": {
				"name": "Predictable, smooth flow",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_YAGNI": {
				"name": "YAGNI and simplest thing",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_CONT_SHIP": {
				"name": "Continuous delivery",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TIP": {
				"name": "Testing in production",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_SINGLE_PIECE_FLOW": {
				"name": "Single piece flow",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_PROCESS_INNOVATION": {
				"name": "Useful process innovation",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_RADICAL_COLLABORATE": {
				"name": "Radical collaboration",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_TDDESIGN": {
				"name": "Test-driven design",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_CONT_DEPLOY": {
				"name": "Continuous deployment",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_METRICS_FOCUS": {
				"name": "Business metric focus",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_LISTEN_TO_CODE": {
				"name": "Code whispering",
				"description": [
					"bq>. Your code can tell you things that are hard to learn anywhere else.",
					"",
					"h1. What this is",
					"",
					"As programmers we develop the ability to detect complexity in software systems. At first we use that to identify and eliminate accidental complexity, but when the code eventually becomes an excellent model of the problem domain, our sensitivity complexity helps us detect and resolve complexity in the problem domain.",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"SK_LEAN_STARTUP": {
				"name": "Lean startup / hypothesis-driven development",
				"description": [
					"bq>. 1-sentence mindset quote goes here",
					"",
					"h1. What this is",
					"",
					"###. TBD",
					"",
					"###. h2. How it helps",
					"",
					"###. TBD",
					"",
					"###. h2. Mindshifts",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring impact",
					"",
					"###. If you are doing this well, you should see improvements in:",
					"",
					"###. * TBD",
					"",
					"###. You may also see:",
					"",
					"###. * TBD",
					"",
					"###. h2. Side effects",
					"",
					"###. TBD (list side effects and practices / stages that can be used to counter them).",
					"",
					"###. h1. Acquiring the skill",
					"",
					"###. TBD",
					"",
					"###. h2. Role during transition",
					"",
					"###. TBD",
					"",
					"###. h2. Why these prereqs help",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"###. h1. Attaining fluency",
					"",
					"###. TBD",
					"",
					"###. h2. Measuring proficiency",
					"",
					"###. TBD",
					"",
					"###. h2. Recipes to follow",
					"",
					"###. TBD",
					"",
					"h2. Further resources",
					"",
					"TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"L_TRADITIONAL": {
				"name": "Traditional done well",
				"description": [
					"bq>. Traditional approaches work when they are done well. Even if we now know better ways.",
					"",
					"h1. What it is",
					"",
					"The items in this era are about shipping software by working as individuals with central coordination. These practices are rooted in working around the high cost to gain skills.",
					"",
					"People spend years developing specialties. The whole process is designed to allow people of different specialties to complete tasks that cannot be done with one specialty alone.",
					"",
					"The general approach is to break tasks into parts on the basis of what skills are needed to do each part, do the work separately, and then re-assemble them to create a solution.",
					"",
					"These techniques are well-known and time-tested. They produce nearly optimal results for the context. We can do far better than this, but only after we change the context, by changing the cost of skill acquisition. While we are changing that context, we should also do well in the current context.",
					"",
					"###. h2. Recurring key ideas",
					"",
					"###. TBD",
					"",
					"###. h2. Outcomes of this phase",
					"",
					"###. TBD",
					"",
					"###. h2. Key proficiencies",
					"",
					"###. List of the most important proficiencies in this stage and why.",
					"",
					"h1. Adoption",
					"",
					"###. Notes on overall approach.",
					"",
					"###. h2. Recommended order",
					"",
					"###. TBD",
					"",
					"###. h2. Resources",
					"",
					"###. TBD",
					"",
					""
				],
				"help_needed": [
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"L_TEAM": {
				"name": "Work as a team",
				"description": [
					"bq>. 1 sentence summary.",
					"",
					"h1. What it is",
					"",
					"###. TBD",
					"",
					"###. h2. Recurring key ideas",
					"",
					"###. TBD",
					"",
					"###. h2. Outcomes of this phase",
					"",
					"###. TBD",
					"",
					"###. h2. Key proficiencies",
					"",
					"###. List of the most important proficiencies in this stage and why.",
					"",
					"h1. Adoption",
					"",
					"###. Notes on overall approach.",
					"",
					"###. h2. Recommended order",
					"",
					"###. TBD",
					"",
					"###. h2. Resources",
					"",
					"###. TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"L_CORE": {
				"name": "Core modern engineering",
				"description": [
					"bq>. My team is starting to work iteratively in everything we do.",
					"",
					"h1. What it is",
					"",
					"###. TBD",
					"",
					"###. h2. Recurring key ideas",
					"",
					"###. TBD",
					"",
					"###. h2. Outcomes of this phase",
					"",
					"###. TBD",
					"",
					"###. h2. Key proficiencies",
					"",
					"###. List of the most important proficiencies in this stage and why.",
					"",
					"h1. Adoption",
					"",
					"###. Notes on overall approach.",
					"",
					"###. h2. Recommended order",
					"",
					"###. TBD",
					"",
					"###. h2. Resources",
					"",
					"###. TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"L_ADAPTIVE": {
				"name": "Adaptive engineering",
				"description": [
					"bq>. 1 sentence summary.",
					"",
					"h1. What it is",
					"",
					"###. TBD",
					"",
					"###. h2. Recurring key ideas",
					"",
					"###. TBD",
					"",
					"###. h2. Outcomes of this phase",
					"",
					"###. TBD",
					"",
					"###. h2. Key proficiencies",
					"",
					"###. List of the most important proficiencies in this stage and why.",
					"",
					"h1. Adoption",
					"",
					"###. Notes on overall approach.",
					"",
					"###. h2. Recommended order",
					"",
					"###. TBD",
					"",
					"###. h2. Resources",
					"",
					"###. TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"L_LEVERAGE": {
				"name": "Leverage capabilities",
				"description": [
					"bq>. 1 sentence summary.",
					"",
					"h1. What it is",
					"",
					"###. TBD",
					"",
					"###. h2. Recurring key ideas",
					"",
					"###. TBD",
					"",
					"###. h2. Outcomes of this phase",
					"",
					"###. TBD",
					"",
					"###. h2. Key proficiencies",
					"",
					"###. List of the most important proficiencies in this stage and why.",
					"",
					"h1. Adoption",
					"",
					"###. Notes on overall approach.",
					"",
					"###. h2. Recommended order",
					"",
					"###. TBD",
					"",
					"###. h2. Resources",
					"",
					"###. TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"L_NO_DEBT": {
				"name": "Eliminate debt and change the rules",
				"description": [
					"bq>. 1 sentence summary.",
					"",
					"h1. What it is",
					"",
					"###. TBD",
					"",
					"###. h2. Recurring key ideas",
					"",
					"###. TBD",
					"",
					"###. h2. Outcomes of this phase",
					"",
					"###. TBD",
					"",
					"###. h2. Key proficiencies",
					"",
					"###. List of the most important proficiencies in this stage and why.",
					"",
					"h1. Adoption",
					"",
					"###. Notes on overall approach.",
					"",
					"###. h2. Recommended order",
					"",
					"###. TBD",
					"",
					"###. h2. Resources",
					"",
					"###. TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			},
			"L_AWESOME": {
				"name": "Take advantage of being awesome",
				"description": [
					"bq>. 1 sentence summary.",
					"",
					"h1. What it is",
					"",
					"###. TBD",
					"",
					"###. h2. Recurring key ideas",
					"",
					"###. TBD",
					"",
					"###. h2. Outcomes of this phase",
					"",
					"###. TBD",
					"",
					"###. h2. Key proficiencies",
					"",
					"###. List of the most important proficiencies in this stage and why.",
					"",
					"h1. Adoption",
					"",
					"###. Notes on overall approach.",
					"",
					"###. h2. Recommended order",
					"",
					"###. TBD",
					"",
					"###. h2. Resources",
					"",
					"###. TBD",
					"",
					""
				],
				"help_needed": [
					"H_KEY",
					"H_CORE",
					"H_REQS",
					"H_ADV",
					"H_REVIEW"
				]
			}
		}
	};
}
