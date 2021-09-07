/* random event condition */
// 일단 각각의 이벤트를 크게 day 기준으로 분리하였고, 이벤트들의 우선 순위를 고려하여 합치는 방향


/* 자연착취 이벤트만 */

if (is_health_under_50 == True){  // 체력 50이하
    /* 랜덤 이벤트 목록에 event_20, event_21, event_22 추가 (합해서 20% 확률) */
}else {  // 체력 50 초과
    /* 랜덤 이벤트 original ver */
}



/* 성경책 이벤트만 */
// 이벤트 선택할때마다 날짜 update 해줘야함

if (is_day_3_to_6 == True){  // 3~6일차
    if (is_bible_one_appear == False){  // 한번도 성경책 1단계 발생 X
        /* 60% 확률로 event_23 등장 (40%는 랜덤 이벤트) */
    }else if (is_bible_one_appear == True){  // 한번이라도 성경책 1단계 발생 O
        if (is_bible_one_yes == False){  // 성경책 1단계 선택 X
            /* 랜덤 이벤트 목록에 event_23 추가 */
        }else if (is_bible_one_yes == True){  // 성경책 1단계 선택 O (아직 5일 안지난 상태임)
            /* 랜덤 이벤트 */
        }
    }
}else if (is_day_over_7 == True){  // 7일차 ~
    if (is_bible_one_appear == False){  // 한번도 성경책 1단계 발생 X
        /* 랜덤 이벤트 (더이상 성격책 event 발생 X) */
    }else if (is_bible_one_appear == True){  // 한번이라도 성경책 1단계 발생 O
        if (is_bible_one_yes == False){  // 성경책 1단계 선택 X
            /* 랜덤 이벤트 목록에 event_23 추가 */
        }else if (is_bible_one_yes == True){  // 성경책 1단계 선택 O

            if (is_bible_one_after_5days == False){ // 1단계 선택 후 1~4일째
                /* 랜덤 이벤트 */
            }else if (is_bible_one_after_5days == True){  // 1단계 선택 후 5일째
                /* 100% 확률로 event_24 & event_25 둘중 하나 등장(각각 50%) */
            }else if (is_bible_one_over_5days == True){  // 1단계 선택 후 6일~째

                if (is_bible_two_yes == False){  // 2단계 선택 X
                    if (is_bible_two_after_5days == False){  // 2단계 선택 X 후 1~4일째
                        /* 랜덤 이벤트 */
                    }else if (is_bible_two_after_5days == True){  // 2단계 선택 X 후 5일째
                        /* 100% 확률로 event_24 & event_25 둘중 하나 등장(2단계 재등장) */
                    }
                }else if (is_bible_two_yes == True){  // 2단계 선택 O

                    if (is_bible_two_after_5days == False){  // 2단계 선택 O 후 1~4일째
                        /* 랜덤 이벤트 */
                    }else if (is_bible_two_after_5days == True){  // 2단계 선택 O 후 5일째
                        /* 100% 확률로 event_26 & event_27 & event_28 셋중 하나 등장 */
                    }else if (is_bible_two_over_5days == True){  // 2단계 선택 O 후 6일~째

                        if (is_bible_three_yes == False){  // 3단계 선택 X
                            if (is_bible_three_after_5days == False){  // 3단계 선택 X 후 1~4일째
                                /* 랜덤 이벤트 */
                            }else if (is_bible_three_after_5days == True){  // 3단계 선택 X 후 5일째
                                /* 100% 확률로 event_26 & event_27 & event_28 셋중 하나 등장(3단계 재등장) */
                            }
                        }else if (is_bible_three_yes == True){  // 3단계 선택 O
                            if (is_bible_three_after_5days == False){  // 3단계 선택 O 후 1~4일째
                                /* 랜덤 이벤트 */
                            }else if (is_bible_three_after_5days == True){  // 3단계 선택 O 후 5일째
                                /* 100% 확률로 event_29 등장 */
                            }else if (is_bible_three_over_5days == True){  // 3단계 선택 O 후 6일~째
                                /* 랜덤 이벤트 */
                            }
                        }
                    }
                }
            }
        }   
    }
}else{  // 1~2일차는 랜덤 이벤트
    /* 랜덤 이벤트 */
}



/* 환경지침도서 이벤트만 */
// 이벤트 선택할때마다 날짜 update 해줘야함

if (is_day_4_to_7 == True){  // 4~7일차
    if (is_environment_one_appear == False){  // 한번이라도 환경지침도서 이벤트 1단계 발생 X
        /* 랜덤 이벤트 목록에 event_30, event_31, event_32 추가 */
    }else if (is_environment_one_appear == True){  // 한번이라도 환경지침도서 이벤트 1단계 발생 O
        /* 랜덤 이벤트 */
    }
}else if (is_day_over_8 == True){  // 8일차 ~
    if (is_environment_one_appear == False){  // 한번이라도 환경지침도서 이벤트 1단계 발생 X
        /* 랜덤 이벤트 (더이상 환경지침도서 이벤트 발생 X) */
    }else if (is_environment_one_appear == True){  // 한번이라도 환경지침도서 이벤트 1단계 발생 O

        if (is_environment_one_yes == False){  // 1단계 선택 X
            if (is_environment_one_after_7days == False){  // 1단계 선택 X 후 1~6일째
                /* 랜덤 이벤트 */
            }else if (is_environment_one_after_7days == True){  // 1단계 선택 X 후 7일째
                /* 100% 확률로 event_30, event_31, event_32 셋중 하나 등장 (재등장) */
            }

        }else if (is_environment_one_yes == True){  // 1단계 선택 O

            if (is_environment_one_after_7days == False){  // 1단계 선택 O 후 1~6일째
                /* 랜덤 이벤트 */
            }else if (is_environment_one_after_7days == True){  // 1단계 선택 O 후 7일째
                /* 100% 확률로 event_33, event_34 둘중 하나 등장 */
            }else if (is_environment_one_over_7days == True){  // 1단계 선택 후 8일~째

                if (is_environment_two_yes == False){  // 2단계 선택 X

                    if (is_environment_two_after_7days == False){  // 2단계 선택 X 후 1~6일째
                        /* 랜덤 이벤트 */
                    }else if (is_environment_two_after_7days == True){  // 2단계 선택 X 후 7일째
                        /* 100% 확률로 event_33, event_34 둘중 하나 등장 (2단계 재등장)*/
                    }                 
                }else if (is_environment_two_yes == True){  // 2단계 선택 O
                    /* 랜덤 이벤트 */
                }
            }
        }
    }
}else{  // 1~3일차는 랜덤 이벤트
    /* 랜덤 이벤트 */
}



/* 부모님 설득 이벤트만 */

if (is_parent_one_appear == False){  // 한번이라도 부모님 이벤트 1단계 발생 X
    /* 랜덤 이벤트 (event_35는 항상 랜덤 이벤트 목록에 포함) */
}else if (is_parent_one_appear == True){  // 한번이라도 부모님 이벤트 1단계 발생 O

    if (is_parent_one_yes == False){  // 1단계 선택 X
        /* 랜덤 이벤트 (event_35 포함)*/   
    }else if (is_parent_one_yes == True){  // 1단계 선택 O


        if (is_parent_one_after_5days == False){  // 1단계 선택 O 후 1~4일째
            /* 랜덤 이벤트 */
        }else if (is_parent_one_after_5days == True){  // 1단계 선택 O 후 5일(+a) ~
            if (is_parent_one_over_5days == False){  // 1단계 선택 O 후 5일째
                /* 100% 확률로 event_36 등장 */
            }else if (is_parent_one_over_5days == True){  // 1단계 선택 후 6일~째

                if (is_parent_two_yes == False){  // 2단계 선택 X
                    if (is_parent_two_after_5days == False){  // 2단계 선택 X 후 1~4일째
                        /* 랜덤 이벤트 */
                    }else if (is_parent_two_after_5days == True){  // 2단계 선택 X 후 5일째
                        /* 100% 확률로 event_36 등장 (2단계 재등장)*/
                    }                 
                }else if (is_parent_two_yes == True){  // 2단계 선택 O


                    if (is_parent_two_after_5days == False){  // 2단계 선택 O 후 1~4일째
                        /* 랜덤 이벤트 */
                    }else if (is_parent_two_after_5days == True){  // 2단계 선택 O 후 5일(+a) ~
                        if (is_parent_two_over_5days == False){  // 2단계 선택 O 후 5일째
                            /* 100% 확률로 event_37 등장 */
                        }else if (is_parent_two_over_5days == True){  // 2단계 선택 후 6일~째
            
                            if (is_parent_three_yes == False){  // 3단계 선택 X
                                if (is_parent_three_after_5days == False){  // 3단계 선택 X 후 1~4일째
                                    /* 랜덤 이벤트 */
                                }else if (is_parent_three_after_5days == True){  // 3단계 선택 X 후 5일째
                                    /* 100% 확률로 event_37 등장 (3단계 재등장)*/
                                }                 
                            }else if (is_parent_three_yes == True){  // 3단계 선택 O
                                                          


                                if (is_parent_three_after_5days == False){  // 3단계 선택 O 후 1~4일째
                                    /* 랜덤 이벤트 */
                                }else if (is_parent_three_after_5days == True){  // 3단계 선택 O 후 5일(+a) ~
                                    if (is_parent_three_over_5days == False){  // 3단계 선택 O 후 5일째
                                        /* 100% 확률로 event_38 (4단계) 등장 */
                                    }else if (is_parent_three_over_5days == True){  // 3단계 선택 후 6일~째
                        
                                        if (is_parent_four_yes == False){  // 4단계 선택 X
                                            if (is_parent_four_after_5days == False){  // 4단계 선택 X 후 1~4일째
                                                /* 랜덤 이벤트 */
                                            }else if (is_parent_four_after_5days == True){  // 4단계 선택 X 후 5일째
                                                /* 100% 확률로 event_38 등장 (4단계 재등장)*/
                                            }                 
                                        }else if (is_parent_four_yes == True){  // 4단계 선택 O
                                            /* 5단계 조건 ..... */
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}